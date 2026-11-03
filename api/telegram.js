/**
 * POST /api/telegram — the only place that talks to Telegram.
 *
 * The bot token and chat id live in server-side environment variables, so they never ship to the
 * browser. Set these two in Vercel → Project → Settings → Environment Variables:
 *
 *   TELEGRAM_BOT_TOKEN   the token BotFather gave you for the bot   (e.g. 123456789:AA...)
 *   TELEGRAM_CHAT_ID     the id of the group the bot posts to       (a negative number, e.g. -100...)
 *
 * Accepts JSON (all fields are length-capped; "sid" is the visitor's short session id):
 *   { type: 'contact', name, contact, message, website, sid, meta: { page, device } }
 *   { type: 'visit', event: 'new', sid, info: { ...see src/lib/visitor.js } }
 *   { type: 'visit', sid, text }          page changes and the end-of-visit summary
 *
 * The server adds what only it can see: the IP address and, on Vercel, the visitor's country,
 * region and city (from Vercel's x-vercel-ip-* headers).
 */

const TG_BASE = process.env.TELEGRAM_API_BASE || 'https://api.telegram.org'; // overridable for tests
const ALLOWED_HOSTS = new Set(['xodjayev.uz', 'www.xodjayev.uz', 'localhost', '127.0.0.1']);
const MAX_TEXT = 4000; // Telegram's limit is 4096

// Tiny per-instance rate limiter (best effort: serverless instances are short-lived).
const hits = new Map();
const limited = (key, max, windowMs) => {
  const now = Date.now();
  const list = (hits.get(key) || []).filter((t) => now - t < windowMs);
  list.push(now);
  hits.set(key, list);
  if (hits.size > 2000) hits.clear();
  return list.length > max;
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const cut = (v, n) => String(v ?? '').replace(/\s+/g, ' ').trim().slice(0, n);
const cutMulti = (v, n) => String(v ?? '').trim().slice(0, n);

const readBody = (req) => {
  const b = req.body;
  if (b && typeof b === 'object' && !Buffer.isBuffer(b)) return b;
  try {
    return JSON.parse(Buffer.isBuffer(b) ? b.toString('utf8') : String(b || '{}'));
  } catch {
    return {};
  }
};

const sameSite = (req) => {
  const origin = req.headers.origin;
  if (!origin) return true; // sendBeacon and same-origin fetches can omit it
  try {
    const host = new URL(origin).hostname;
    return host === String(req.headers.host || '').split(':')[0] || ALLOWED_HOSTS.has(host);
  } catch {
    return false;
  }
};

const clientIp = (req) =>
  String(req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || req.socket?.remoteAddress || 'unknown')
    .split(',')[0]
    .trim();

const safeDecode = (s) => {
  try { return decodeURIComponent(s); } catch { return s; }
};

/** "Tashkent, Toshkent, UZ" from Vercel's geo headers (empty when not on Vercel). */
const placeOf = (req) => {
  const h = req.headers;
  const parts = [h['x-vercel-ip-city'] && safeDecode(h['x-vercel-ip-city']), h['x-vercel-ip-country-region'], h['x-vercel-ip-country']].filter(Boolean);
  return cut(parts.join(', '), 120);
};

const serverTime = () => new Date().toLocaleString('en-GB', { timeZone: 'Asia/Tashkent', hour12: false }) + ' (Tashkent)';

const line = (icon, label, value) => (value ? `${icon} ${label}: ${value}` : null);

// Visit info fields we accept from the browser (anything else is dropped).
const INFO_KEYS = ['page', 'referrer', 'campaign', 'deviceType', 'device', 'os', 'browser', 'screen', 'viewport', 'language', 'timezone', 'localTime', 'network', 'hardware', 'touch', 'prefs', 'ua'];

const composeNewVisit = (req, body) => {
  const i = {};
  INFO_KEYS.forEach((k) => { i[k] = cut(body.info?.[k], k === 'ua' ? 300 : 160); });
  const place = placeOf(req);
  return [
    '👀 New Visitor: xodjayev.uz',
    line('📄', 'Page', i.page),
    line('🔗', 'From', i.referrer),
    line('🎯', 'Campaign', i.campaign),
    line('🌍', 'IP', clientIp(req)),
    line('📍', 'Location', place),
    line('📅', 'Time', `${serverTime()}${i.localTime ? ` · their clock ${i.localTime}` : ''}`),
    line('📱', 'Device', [i.deviceType, i.device].filter(Boolean).join(' · ')),
    line('⚙️', 'OS', i.os),
    line('🌐', 'Browser', i.browser),
    line('🖥️', 'Screen', `${i.screen}${i.viewport ? ` (window ${i.viewport})` : ''}`),
    line('🗣️', 'Language', `${i.language}${i.timezone ? ` · ${i.timezone}` : ''}`),
    line('📶', 'Network', i.network),
    line('🧠', 'Hardware', i.hardware),
    line('👆', 'Input / theme', [i.touch, i.prefs].filter(Boolean).join(' · ')),
    line('🔎', 'UA', i.ua),
    line('🆔', 'Visit', cut(body.sid, 16)),
  ].filter(Boolean).join('\n');
};

const composeContact = (req, body) => {
  const name = cut(body.name, 100);
  const contact = cut(body.contact, 200);
  const message = cutMulti(body.message, 2500);
  if (!name || !contact || !message) return null;
  const place = placeOf(req);
  const meta = body.meta || {};
  const tail = [
    line('🌍', 'IP', clientIp(req)),
    line('📍', 'Location', place),
    line('📱', 'Device', cut(meta.device, 200)),
    line('📄', 'Sent from', cut(meta.page, 100)),
    line('📅', 'Time', serverTime()),
    line('🆔', 'Visit', cut(body.sid, 16)),
  ].filter(Boolean).map(esc).join('\n');
  return [
    '📩 <b>New message from the contact form</b>',
    '',
    `<b>Name:</b> ${esc(name)}`,
    `<b>Reply via:</b> ${esc(contact)}`,
    '<b>Message:</b>',
    esc(message),
    '',
    tail,
  ].join('\n');
};

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method-not-allowed' });
  }
  if (!sameSite(req)) return res.status(403).json({ ok: false, error: 'forbidden' });

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return res.status(503).json({ ok: false, error: 'not-configured' });

  const body = readBody(req);
  const ip = clientIp(req);

  let text;
  let parseMode;
  if (body.type === 'contact') {
    if (cut(body.website, 50)) return res.status(200).json({ ok: true }); // honeypot: pretend it worked
    if (limited(`c:${ip}`, 5, 10 * 60 * 1000)) return res.status(429).json({ ok: false, error: 'too-many-requests' });
    text = composeContact(req, body);
    if (!text) return res.status(400).json({ ok: false, error: 'missing-fields' });
    parseMode = 'HTML';
  } else if (body.type === 'visit') {
    if (limited(`v:${ip}`, 80, 10 * 60 * 1000)) return res.status(429).json({ ok: false, error: 'too-many-requests' });
    if (body.event === 'new') {
      text = composeNewVisit(req, body);
    } else {
      const t = cutMulti(body.text, 1200);
      if (!t) return res.status(400).json({ ok: false, error: 'missing-fields' });
      text = [t, line('📍', 'Location', placeOf(req)), line('🆔', 'Visit', cut(body.sid, 16))].filter(Boolean).join('\n');
    }
  } else {
    return res.status(400).json({ ok: false, error: 'unknown-type' });
  }
  text = text.slice(0, MAX_TEXT);

  try {
    const r = await fetch(`${TG_BASE}/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chat, text, parse_mode: parseMode, disable_web_page_preview: true }),
    });
    if (!r.ok) {
      // Log only the status — never the URL, which contains the token.
      console.error(`telegram sendMessage failed: HTTP ${r.status}`);
      return res.status(502).json({ ok: false, error: 'upstream-failed' });
    }
    return res.status(200).json({ ok: true });
  } catch {
    console.error('telegram sendMessage failed: network error');
    return res.status(502).json({ ok: false, error: 'upstream-failed' });
  }
}
