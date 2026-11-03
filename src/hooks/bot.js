import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getVisitorInfo, isTrackable, sessionId } from "../lib/visitor";

/**
 * Visitor notifications for the Telegram group.
 *
 * It sends nothing itself: every message goes to /api/telegram (api/telegram.js), which holds the
 * bot token on the server and adds the visitor's IP, location and approximate coordinates.
 *
 * What is reported (only for real visitors: local dev, crawlers, automated browsers and people
 * who switched reporting off in the footer are skipped, see isTrackable):
 *   - a "New / Returning Visitor" card (page, referrer, device, OS, browser, screen, language, ...)
 *   - each page change: how long they stayed and how much of the page they saw
 *   - clicks on outside links (GitHub, LinkedIn, e-mail, project demos, ...)
 *   - theme switches, and finding the secret ASCII room
 *   - a summary when they leave: pages seen, time, clicks
 */

const ENDPOINT = "/api/telegram";
const MAX_CLICKS = 15;   // per visit
const MAX_THEMES = 4;    // per visit

const PAGES = {
    "/": "Home",
    "/works": "Projects",
    "/contributions": "Contributions",
    "/blog": "Writing",
    "/skills": "Skills",
    "/about": "About",
    "/contacts": "Contact",
    "/ascii": "Secret ASCII room 🎉",
};

const duration = (ms) => {
    const s = Math.max(0, Math.floor(ms / 1000));
    return `${Math.floor(s / 60)}m ${s % 60}s`;
};

const post = (payload, { beacon = false } = {}) => {
    const body = JSON.stringify(payload);
    try {
        if (beacon && navigator.sendBeacon) {
            // sendBeacon survives the page closing; the Blob sets the JSON content type
            navigator.sendBeacon(ENDPOINT, new Blob([body], { type: "application/json" }));
            return;
        }
        fetch(ENDPOINT, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body,
            keepalive: true,
        }).catch(() => { /* notifications are best effort */ });
    } catch {
        /* ignore */
    }
};

// The visit survives a page reload (it lives in sessionStorage, which is per tab), so a reload does
// not post a second "New Visitor" card or reset the pages / time / click counters.
const STATE_KEY = "visit-state";
const loadState = () => {
    try { return JSON.parse(sessionStorage.getItem(STATE_KEY)) || {}; } catch { return {}; }
};
const saveState = (patch) => {
    try { sessionStorage.setItem(STATE_KEY, JSON.stringify({ ...loadState(), ...patch })); } catch { /* ignore */ }
};

// Blog post titles are loaded on demand (the posts are a separate chunk).
let blogPosts = null;
const resolveLabel = async (path) => {
    const clean = path.split("?")[0].replace(/\/+$/, "") || "/";
    if (PAGES[clean]) return PAGES[clean];
    const m = clean.match(/^\/blog\/([^/]+)$/);
    if (m) {
        try {
            blogPosts = blogPosts || (await import("../data/blog.json")).default;
            const post = blogPosts.find((p) => p.id === m[1]);
            return post ? `Post “${post.title}”` : `Post ${m[1]}`;
        } catch {
            return `Post ${m[1]}`;
        }
    }
    return clean;
};

/** How far down the page the visitor has seen, in %: the bottom edge of the window against the page height. */
const scrollDepth = () => {
    const el = document.documentElement;
    const total = el.scrollHeight;
    if (total - window.innerHeight <= 8) return 100; // the whole page fits on screen
    return Math.round(Math.min(100, ((window.scrollY + window.innerHeight) / total) * 100));
};

const HOSTS = [
    [/(^|\.)github\.com$/, "GitHub"],
    [/(^|\.)linkedin\.com$/, "LinkedIn"],
    [/^t\.me$|(^|\.)telegram\.(me|org)$/, "Telegram"],
    [/(^|\.)instagram\.com$/, "Instagram"],
    [/(^|\.)(twitter|x)\.com$/, "X (Twitter)"],
    [/^sys\.xodjayev\.uz$/, "Architecture graph (AppGraph)"],
];

/** Describes an outside link, or returns null for links that stay on this site. */
const describeLink = (a) => {
    let url;
    try { url = new URL(a.getAttribute("href") || "", window.location.href); } catch { return null; }
    if (url.protocol === "mailto:") return { kind: "Email", where: url.pathname, tag: "email" };
    if (url.protocol === "tel:") return { kind: "Phone", where: url.pathname, tag: "phone" };
    if (!/^https?:$/.test(url.protocol) || url.hostname === window.location.hostname) return null;
    const known = HOSTS.find(([re]) => re.test(url.hostname));
    const kind = known
        ? known[1]
        : /(^|\.)xodjayev\.uz$/.test(url.hostname) ? "Project demo" : "Other link";
    return {
        kind,
        where: `${url.hostname.replace(/^www\./, "")}${url.pathname === "/" ? "" : url.pathname}`.slice(0, 120),
        tag: kind.toLowerCase().split(/[^a-z]+/)[0] || "link",
    };
};

const Bot = () => {
    const location = useLocation();
    const tracking = useRef(false);
    const started = useRef(false);                  // avoid a double send in StrictMode
    const enteredAt = useRef(Date.now());           // when the visitor entered the current page
    const visitStart = useRef(Date.now());          // start of the whole visit
    const prevPath = useRef(location.pathname);
    const maxScroll = useRef(0);                    // deepest scroll on the current page
    const finalSent = useRef(false);
    const labels = useRef(new Map());               // path → readable page name
    const seenPages = useRef([]);                   // pages in the order visited
    const clicks = useRef(0);
    const themeChanges = useRef(0);
    const lastClick = useRef(new Map());            // href → time, to ignore double clicks

    const label = (path) => labels.current.get(path) || path;
    const remember = async (path) => {
        const l = await resolveLabel(path);
        labels.current.set(path, l);
        if (!seenPages.current.length || seenPages.current[seenPages.current.length - 1] !== path) {
            seenPages.current.push(path);
            saveState({ pages: seenPages.current.slice(-40) });
        }
        return l;
    };

    // 1) One "New / Returning Visitor" card per visit, then event listeners
    useEffect(() => {
        if (started.current) return undefined;
        started.current = true;
        tracking.current = isTrackable();
        if (!tracking.current) return undefined;

        // pick up where this tab's visit left off (after a reload), or start it
        const saved = loadState();
        visitStart.current = saved.start || Date.now();
        seenPages.current = Array.isArray(saved.pages) ? saved.pages : [];
        clicks.current = saved.clicks || 0;
        themeChanges.current = saved.themes || 0;
        saveState({ start: visitStart.current });
        remember(location.pathname);

        if (!saved.announced) {
            saveState({ announced: true });
            (async () => {
                try {
                    const info = await getVisitorInfo();
                    post({ type: "visit", event: "new", sid: sessionId(), info });
                } catch {
                    /* ignore */
                }
            })();
        }

        // scroll depth of the current page
        const onScroll = () => { maxScroll.current = Math.max(maxScroll.current, scrollDepth()); };
        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        // clicks on outside links (also middle-click)
        const onClick = (e) => {
            const a = e.target instanceof Element ? e.target.closest("a[href]") : null;
            if (!a || clicks.current >= MAX_CLICKS) return;
            const info = describeLink(a);
            if (!info) return;
            const key = a.getAttribute("href");
            const now = Date.now();
            if (now - (lastClick.current.get(key) || 0) < 15000) return;
            lastClick.current.set(key, now);
            clicks.current += 1;
            saveState({ clicks: clicks.current });
            const text = (a.getAttribute("aria-label") || a.textContent || "").replace(/\s+/g, " ").trim().slice(0, 60);
            post({
                type: "visit",
                sid: sessionId(),
                text: `🔗 Clicked: ${info.kind}\n➡️ ${info.where}${text ? `\n🖱️ “${text}”` : ""}\n📄 On: ${label(prevPath.current)} (${prevPath.current})\n🏷️ #click #${info.tag}`,
            });
        };
        document.addEventListener("click", onClick, true);
        document.addEventListener("auxclick", onClick, true);

        // theme switches (the site sets data-theme on <html>)
        const mo = new MutationObserver(() => {
            if (themeChanges.current >= MAX_THEMES) return;
            themeChanges.current += 1;
            saveState({ themes: themeChanges.current });
            const to = document.documentElement.dataset.theme || "?";
            post({ type: "visit", sid: sessionId(), text: `🌓 Switched to the ${to} theme\n📄 On: ${label(prevPath.current)} (${prevPath.current})\n🏷️ #theme` });
        });
        mo.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        return () => {
            window.removeEventListener("scroll", onScroll);
            document.removeEventListener("click", onClick, true);
            document.removeEventListener("auxclick", onClick, true);
            mo.disconnect();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 2) A message whenever the page changes
    useEffect(() => {
        const prev = prevPath.current;
        const curr = location.pathname;
        if (prev === curr) return;

        if (tracking.current) {
            const stayed = duration(Date.now() - enteredAt.current);
            const saw = maxScroll.current;
            (async () => {
                const toLabel = await remember(curr);
                post({
                    type: "visit",
                    sid: sessionId(),
                    text: `📄 User switched page\n➡️ From: ${label(prev)} (${prev})\n➡️ To: ${toLabel} (${curr})\n⏱️ Stayed on previous: ${stayed}\n📜 Saw ${saw}% of the previous page${curr === "/ascii" ? "\n🎉 Found the secret ASCII room!\n🏷️ #secretroom" : ""}`,
                });
            })();
        }
        prevPath.current = curr;
        enteredAt.current = Date.now();
        maxScroll.current = 0;
        // a new page starts at the top; measure again after it has rendered
        setTimeout(() => { maxScroll.current = Math.max(maxScroll.current, scrollDepth()); }, 400);
    }, [location.pathname]);

    // 3) A summary when they leave (pagehide also covers mobile browsers)
    useEffect(() => {
        const leave = () => {
            if (!tracking.current || finalSent.current) return;
            finalSent.current = true;
            const route = seenPages.current.map((p) => (labels.current.get(p) || p).replace(/ 🎉$/, "")).join(" → ");
            post(
                {
                    type: "visit",
                    sid: sessionId(),
                    text: `🏁 Visit ended\n📄 Final page: ${label(prevPath.current)} (${prevPath.current})\n⏱️ Time on final page: ${duration(Date.now() - enteredAt.current)}\n📜 Saw ${Math.max(maxScroll.current, scrollDepth())}% of it\n🗺️ Pages: ${route || "-"}\n🔗 Link clicks: ${clicks.current}\n🕒 Total session: ${duration(Date.now() - visitStart.current)}`,
                },
                { beacon: true }
            );
        };
        const back = (e) => { if (e.persisted) finalSent.current = false; }; // restored from the back/forward cache

        window.addEventListener("pagehide", leave);
        window.addEventListener("beforeunload", leave);
        window.addEventListener("pageshow", back);
        return () => {
            window.removeEventListener("pagehide", leave);
            window.removeEventListener("beforeunload", leave);
            window.removeEventListener("pageshow", back);
        };
    }, []);

    return null;
};

export default Bot;
