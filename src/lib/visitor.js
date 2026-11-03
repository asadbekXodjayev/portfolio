/**
 * Collects the information the visitor notification (hooks/bot.js) and the contact form send to
 * the Telegram group. Everything here is read from standard browser APIs; nothing is stored.
 *
 * Honest limits:
 *  - iPhones: browsers do not expose the model. We only GUESS a likely range from the screen size.
 *  - Android: Chrome can report the real model through User-Agent Client Hints (e.g. "SM-S918B").
 *  - The IP address and location are added by the server (api/telegram.js), not here.
 */

const BOT_RE = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit/i;

/** False for local development, crawlers and automated browsers (so they never ping the group). */
export const isTrackable = () => {
  if (typeof window === 'undefined') return false;
  if (/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)) return false;
  if (navigator.webdriver) return false;
  return !BOT_RE.test(navigator.userAgent);
};

/** A short random id for this tab's visit, so the group can link page changes to the same person. */
export const sessionId = () => {
  try {
    let id = sessionStorage.getItem('visit-id');
    if (!id) {
      id = Math.random().toString(16).slice(2, 8);
      sessionStorage.setItem('visit-id', id);
    }
    return id;
  } catch {
    return 'nostore';
  }
};

// iPhone / iPad screen sizes (CSS pixels, portrait, device pixel ratio) → likely models.
const IPHONES = {
  '320x568@2': 'iPhone 5 / 5s / SE (1st gen)',
  '375x667@2': 'iPhone 6 / 7 / 8 / SE (2nd or 3rd gen)',
  '414x736@3': 'iPhone 6 / 7 / 8 Plus',
  '375x812@3': 'iPhone X / XS / 11 Pro / 12 mini / 13 mini',
  '414x896@2': 'iPhone XR / 11',
  '414x896@3': 'iPhone XS Max / 11 Pro Max',
  '390x844@3': 'iPhone 12 / 12 Pro / 13 / 13 Pro / 14 / 16e',
  '428x926@3': 'iPhone 12 Pro Max / 13 Pro Max / 14 Plus',
  '393x852@3': 'iPhone 14 Pro / 15 / 15 Pro / 16',
  '430x932@3': 'iPhone 14 Pro Max / 15 Plus / 15 Pro Max / 16 Plus',
  '402x874@3': 'iPhone 16 Pro / 17 / 17 Pro',
  '420x912@3': 'iPhone Air',
  '440x956@3': 'iPhone 16 Pro Max / 17 Pro Max',
};

const ANDROID_BRANDS = [
  [/^SM-|^GT-|^SCG/i, 'Samsung'],
  [/^Pixel/i, 'Google'],
  [/^(Redmi|POCO|Mi |Xiaomi|M\d{4}[A-Z0-9]+|\d{5,8}[A-Z]{2,4}\d?[A-Z]?$)/i, 'Xiaomi'],
  [/^(CPH|RMX|PH[A-Z]\d)/i, 'Oppo / Realme'],
  [/^(V\d{4}|vivo)/i, 'Vivo'],
  [/^(XQ-|SO-|SOG)/i, 'Sony'],
  [/^(LE\d|OnePlus|IN\d{4}|KB\d{4}|NE\d{4})/i, 'OnePlus'],
  [/^(ELS-|NOH-|LYA-|ANA-|JAD-|HUAWEI)/i, 'Huawei'],
  [/^(TA-|Nokia)/i, 'Nokia'],
  [/^(moto|XT\d{4})/i, 'Motorola'],
];
const brandOf = (model) => (ANDROID_BRANDS.find(([re]) => re.test(model)) || [])[1];

const browserOf = (ua) => {
  const m = (re) => (ua.match(re) || [])[1];
  if (/Edg(e|A|iOS)?\//.test(ua)) return `Edge ${m(/Edg(?:e|A|iOS)?\/(\d+)/) || ''}`.trim();
  if (/OPR\/|Opera/.test(ua)) return `Opera ${m(/OPR\/(\d+)/) || ''}`.trim();
  if (/SamsungBrowser\//.test(ua)) return `Samsung Internet ${m(/SamsungBrowser\/(\d+)/) || ''}`.trim();
  if (/Firefox\/|FxiOS\//.test(ua)) return `Firefox ${m(/(?:Firefox|FxiOS)\/(\d+)/) || ''}`.trim();
  if (/CriOS\/|Chrome\//.test(ua)) return `Chrome ${m(/(?:CriOS|Chrome)\/(\d+)/) || ''}`.trim();
  if (/Safari\//.test(ua) && /Version\//.test(ua)) return `Safari ${m(/Version\/(\d+)/) || ''}`.trim();
  return 'unknown';
};

const osOf = (ua, uaData, hi) => {
  const platform = (uaData && uaData.platform) || '';
  // Client Hints versions are only trusted when they describe the same platform as the UA string
  // (a spoofed or frozen UA, like Safari's "10_15_7", says nothing about the real version).
  const hintsMatch = (name) => platform === name && hi && hi.platformVersion;
  const pv = hintsMatch('Windows') ? parseInt(hi.platformVersion, 10) : null;
  if (/iPhone|iPad|iPod/.test(ua)) return `iOS ${((ua.match(/OS (\d+[_\d]*)/) || [])[1] || '').replace(/_/g, '.')}`.trim();
  if (/Android/.test(ua)) return `Android ${(hi && hi.platformVersion) || (ua.match(/Android ([\d.]+)/) || [])[1] || ''}`.trim();
  if (/Windows/.test(ua) || platform === 'Windows') return pv !== null ? (pv >= 13 ? 'Windows 11' : 'Windows 10') : 'Windows 10/11';
  if (/Mac OS X|Macintosh/.test(ua) || platform === 'macOS') return hintsMatch('macOS') ? `macOS ${hi.platformVersion}` : 'macOS';
  if (/CrOS/.test(ua)) return 'ChromeOS';
  if (/Linux/.test(ua)) return 'Linux';
  return platform || 'unknown';
};

const describeDevice = (ua, uaData, hi) => {
  const touch = navigator.maxTouchPoints || 0;
  const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
  const w = Math.min(screen.width, screen.height);
  const h = Math.max(screen.width, screen.height);

  if (/iPad/.test(ua) || (/Macintosh/.test(ua) && touch > 1)) return { type: 'Tablet', name: 'iPad' };
  if (/iPhone|iPod/.test(ua)) {
    const guess = IPHONES[`${w}x${h}@${Math.round(dpr)}`];
    return { type: 'Phone', name: guess ? `iPhone, likely ${guess} (guessed from screen size)` : `iPhone (${w}x${h} @${dpr}x)` };
  }
  if (/Android/.test(ua)) {
    let model = (hi && hi.model) || (ua.match(/Android [\d.]+; ([^;)]+?)(?: Build|;|\))/) || [])[1] || '';
    if (/^K$/.test(model)) model = ''; // Chrome's reduced UA string
    const brand = model ? brandOf(model) : '';
    const type = /Mobile/.test(ua) ? 'Phone' : 'Tablet';
    return { type, name: model ? `${brand ? `${brand} ` : ''}${model}${brand === 'Xiaomi' ? ' (Xiaomi family)' : ''}` : 'Android device (model hidden by the browser)' };
  }
  if (/Macintosh/.test(ua)) return { type: 'PC', name: 'Mac' };
  if (/Windows/.test(ua)) return { type: 'PC', name: 'Windows PC' };
  if (/CrOS/.test(ua)) return { type: 'PC', name: 'Chromebook' };
  if (/Linux/.test(ua)) return { type: 'PC', name: 'Linux PC' };
  return { type: 'unknown', name: 'unknown' };
};

const utmOf = () => {
  try {
    const q = new URLSearchParams(window.location.search);
    const parts = ['utm_source', 'utm_medium', 'utm_campaign'].map((k) => q.get(k)).filter(Boolean);
    return parts.join(' / ');
  } catch {
    return '';
  }
};

/** Everything we know about this visit. Resolves quickly (the Client Hints call is local). */
export const getVisitorInfo = async () => {
  const ua = navigator.userAgent;
  const uaData = navigator.userAgentData;
  let hi = null;
  try {
    if (uaData && uaData.getHighEntropyValues) hi = await uaData.getHighEntropyValues(['model', 'platformVersion']);
  } catch {
    hi = null;
  }
  const dev = describeDevice(ua, uaData, hi);
  const conn = navigator.connection || {};
  const dpr = Math.round((window.devicePixelRatio || 1) * 100) / 100;
  const tz = (() => { try { return Intl.DateTimeFormat().resolvedOptions().timeZone; } catch { return ''; } })();
  const mq = (q) => window.matchMedia && window.matchMedia(q).matches;

  return {
    page: window.location.pathname + window.location.search,
    referrer: document.referrer ? (() => { try { return new URL(document.referrer).hostname || document.referrer; } catch { return document.referrer; } })() : 'direct',
    campaign: utmOf(),
    deviceType: dev.type,
    device: dev.name,
    os: osOf(ua, uaData, hi),
    browser: browserOf(ua),
    screen: `${screen.width}x${screen.height} @${dpr}x`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    language: (navigator.languages && navigator.languages.length ? navigator.languages.slice(0, 3).join(', ') : navigator.language) || '',
    timezone: tz,
    localTime: new Date().toLocaleString(),
    network: conn.effectiveType ? `${conn.effectiveType}${conn.downlink ? `, ~${conn.downlink} Mbps` : ''}${conn.rtt ? `, ${conn.rtt} ms` : ''}${conn.saveData ? ', data saver' : ''}` : '',
    hardware: [navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} cores` : '', navigator.deviceMemory ? `${navigator.deviceMemory}+ GB RAM` : ''].filter(Boolean).join(' / '),
    touch: navigator.maxTouchPoints ? `touch (${navigator.maxTouchPoints} points)` : 'no touch',
    prefs: [mq('(prefers-color-scheme: dark)') ? 'dark mode' : 'light mode', mq('(prefers-reduced-motion: reduce)') ? 'reduced motion' : ''].filter(Boolean).join(', '),
    ua,
  };
};

/** A one-line description for the contact form message. */
export const deviceSummary = (info) => `${info.device} · ${info.os} · ${info.browser}`;
