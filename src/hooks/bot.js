import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Bot = () => {
    const BOT_TOKEN = "5564814493:AAE-fW4LsvsR5azRSdOu24GRpEiuFxt3Em8";
    const CHAT_ID = "-1001756381397";

    const location = useLocation();
    const initialSent = useRef(false);         // avoid double send in StrictMode
    const enterTimeRef = useRef(Date.now());   // when user entered the current page
    const prevPathRef = useRef(location.pathname); // previous pathname
    const visitStartRef = useRef(Date.now());  // overall visit start

    // small helper to send via API
    async function sendMessage(text) {
        try {
            await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ chat_id: CHAT_ID, text }),
            });
            console.debug("BotCom: message sent:", text);
        } catch (err) {
            console.error("BotCom: sendMessage error:", err);
        }
    }

    // helper to send via sendBeacon (used on unload)
    function beaconMessage(text) {
        try {
            const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
            const payload = JSON.stringify({ chat_id: CHAT_ID, text });
            // navigator.sendBeacon expects a Blob or ArrayBufferView for non-string in some browsers
            const blob = new Blob([payload], { type: "application/json" });
            navigator.sendBeacon(url, blob);
            console.debug("BotCom: beacon sent:", text);
        } catch (err) {
            console.error("BotCom: beaconMessage error:", err);
        }
    }

    function getDeviceInfo() {
        const ua = navigator.userAgent;
        let deviceType = "Unknown";
        if (/mobile/i.test(ua)) deviceType = "Phone";
        else if (/tablet/i.test(ua)) deviceType = "Tablet";
        else deviceType = "PC";

        let os = "Unknown";
        if (/windows/i.test(ua)) os = "Windows";
        else if (/android/i.test(ua)) os = "Android";
        else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";
        else if (/mac os/i.test(ua)) os = "macOS";
        else if (/linux/i.test(ua)) os = "Linux";

        return { deviceType, os, ua };
    }

    // Send full visitor info once on first mount
    useEffect(() => {
        if (initialSent.current) return;
        initialSent.current = true;

        (async () => {
            try {
                const res = await fetch("https://api.ipify.org?format=json");
                const data = await res.json();
                const ip = data.ip || "unknown";

                const { deviceType, os, ua } = getDeviceInfo();
                const width = window.innerWidth;
                const height = window.innerHeight;
                const time = new Date().toLocaleString();
                const page = location.pathname;

                const message = `👀 New Visitor: xodjayev.uz
📄 Page: ${page}
🌍 IP: ${ip}
📅 Time: ${time}
🖥️ Screen: ${width}x${height}
📱 Device: ${deviceType}
⚙️ OS: ${os}
🔎 UA: ${ua}`;

                await sendMessage(message);
            } catch (err) {
                console.error("BotCom: initial send failed:", err);
            }
        })();

        // set initial timestamps
        visitStartRef.current = Date.now();
        enterTimeRef.current = Date.now();
        prevPathRef.current = location.pathname;
    }, []); // run once

    // Send relocation message every time pathname changes
    useEffect(() => {
        const prev = prevPathRef.current;
        const curr = location.pathname;

        // If first load (prev === curr) do nothing here
        if (prev === curr) return;

        // compute duration on prev page
        const durationSec = Math.floor((Date.now() - enterTimeRef.current) / 1000);
        const min = Math.floor(durationSec / 60);
        const sec = durationSec % 60;
        const durationText = `${min}m ${sec}s`;

        const msg = `📄 User switched page
➡️ From: ${prev}
➡️ To: ${curr}
⏱️ Stayed on previous: ${durationText}`;

        // send message
        sendMessage(msg).catch(() => { /* swallow */ });

        // reset timers & prev
        prevPathRef.current = curr;
        enterTimeRef.current = Date.now();

    }, [location.pathname]);

    // on unload: send last page duration + total session duration (use sendBeacon)
    useEffect(() => {
        const handler = () => {
            const lastPage = prevPathRef.current || location.pathname;
            const lastDurationSec = Math.floor((Date.now() - enterTimeRef.current) / 1000);
            const lm = Math.floor(lastDurationSec / 60);
            const ls = lastDurationSec % 60;

            const totalSec = Math.floor((Date.now() - visitStartRef.current) / 1000);
            const tm = Math.floor(totalSec / 60);
            const ts = totalSec % 60;

            const text = `📄 Final page: ${lastPage}
⏱️ Time on final page: ${lm}m ${ls}s
🏁 Total session: ${tm}m ${ts}s`;

            beaconMessage(text);
        };

        window.addEventListener("beforeunload", handler);
        // also handle pagehide for mobile browsers
        window.addEventListener("pagehide", handler);

        return () => {
            window.removeEventListener("beforeunload", handler);
            window.removeEventListener("pagehide", handler);
        };
    }, []);

    return null;
};

export default Bot;
