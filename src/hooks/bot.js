import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getVisitorInfo, isTrackable, sessionId } from "../lib/visitor";

/**
 * Visitor notifications for the Telegram group.
 *
 * It sends nothing itself: every message goes to /api/telegram (api/telegram.js), which holds the
 * bot token on the server and adds the visitor's IP and location. What is reported:
 *   - a "New Visitor" card (page, referrer, device, OS, browser, screen, language, network, ...)
 *   - each page change, with how long they stayed on the previous page
 *   - a final summary when they leave
 * Local development, crawlers and automated browsers are skipped (see isTrackable).
 */

const ENDPOINT = "/api/telegram";

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

const Bot = () => {
    const location = useLocation();
    const tracking = useRef(false);
    const started = useRef(false);                 // avoid a double send in StrictMode
    const enteredAt = useRef(Date.now());          // when the visitor entered the current page
    const visitStart = useRef(Date.now());         // start of the whole visit
    const prevPath = useRef(location.pathname);
    const finalSent = useRef(false);

    // 1) One "New Visitor" card per visit
    useEffect(() => {
        if (started.current) return;
        started.current = true;
        tracking.current = isTrackable();
        if (!tracking.current) return;

        (async () => {
            try {
                const info = await getVisitorInfo();
                post({ type: "visit", event: "new", sid: sessionId(), info });
            } catch {
                /* ignore */
            }
        })();
    }, []);

    // 2) A message whenever the page changes
    useEffect(() => {
        const prev = prevPath.current;
        const curr = location.pathname;
        if (prev === curr) return;

        if (tracking.current) {
            post({
                type: "visit",
                sid: sessionId(),
                text: `📄 User switched page\n➡️ From: ${prev}\n➡️ To: ${curr}\n⏱️ Stayed on previous: ${duration(Date.now() - enteredAt.current)}`,
            });
        }
        prevPath.current = curr;
        enteredAt.current = Date.now();
    }, [location.pathname]);

    // 3) A summary when they leave (pagehide also covers mobile browsers)
    useEffect(() => {
        const leave = () => {
            if (!tracking.current || finalSent.current) return;
            finalSent.current = true;
            post(
                {
                    type: "visit",
                    sid: sessionId(),
                    text: `🏁 Visit ended\n📄 Final page: ${prevPath.current}\n⏱️ Time on final page: ${duration(Date.now() - enteredAt.current)}\n🕒 Total session: ${duration(Date.now() - visitStart.current)}`,
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
