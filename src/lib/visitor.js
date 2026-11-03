/**
 * Collects the information the visitor notification (hooks/bot.js) and the contact form send to
 * the Telegram group. Everything here is read from standard browser APIs.
 *
 * Honest limits:
 *  - iPhones: browsers do not expose the model. We only GUESS a likely range from the screen size.
 *  - Android: Chrome can report the real model through User-Agent Client Hints (e.g. "SM-S918B").
 *  - The IP address, location and coordinates are added by the server (api/telegram.js), not here.
 *
 * Privacy: a random id is kept in the browser's localStorage only to tell new from returning
 * visitors. Visitors can switch reporting off in the footer (see setOptOut), and the owner can
 * visit any page with ?me=1 to switch it off for their own browser (?me=0 turns it back on).
 */

const BOT_RE = /bot|crawl|spider|slurp|headless|lighthouse|pagespeed|preview|facebookexternalhit/i;
const OPT_OUT_KEY = 'no-track';
const VISITOR_KEYS = ['visitor-id', 'visit-count', 'first-seen', 'last-seen'];

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); return true; } catch { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch { /* ignore */ } },
};

/* ── opt-out and eligibility ─────────────────────────────────────────────────────────────── */

export const isOptedOut = () => store.get(OPT_OUT_KEY) === '1';

export const setOptOut = (off) => {
  if (off) {
    store.set(OPT_OUT_KEY, '1');
    VISITOR_KEYS.forEach((k) => store.del(k)); // forget the id too
    try { sessionStorage.removeItem('visit-record'); } catch { /* ignore */ }
  } else {
    store.del(OPT_OUT_KEY);
  }
};

/** ?me=1 → stop reporting this browser (for the owner); ?me=0 → start again. */
const applyOwnerParam = () => {
  try {
    const v = new URLSearchParams(window.location.search).get('me');
    if (v === '1') setOptOut(true);
    else if (v === '0') setOptOut(false);
  } catch { /* ignore */ }
};

/** False for local development, crawlers, automated browsers, and visitors who opted out. */
export const isTrackable = () => {
  if (typeof window === 'undefined') return false;
  applyOwnerParam();
  if (isOptedOut()) return false;
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

/* ── new vs returning ────────────────────────────────────────────────────────────────────── */

const today = () => new Date().toISOString().slice(0, 10);

/** { status: 'new' | 'returning' | 'unknown', count, firstSeen, lastSeen } — stable for the whole tab session. */
export const visitorRecord = () => {
  if (isOptedOut()) return null;
  try {
    const cached = sessionStorage.getItem('visit-record');
    if (cached) return JSON.parse(cached);
  } catch { /* ignore */ }

  const probe = store.set('visit-probe', '1');
  store.del('visit-probe');
  if (!probe) return { status: 'unknown', count: 0, firstSeen: '', lastSeen: '' }; // storage blocked

  const had = store.get('visitor-id');
  const rec = {
    status: had ? 'returning' : 'new',
    count: (Number(store.get('visit-count')) || 0) + 1,
    firstSeen: store.get('first-seen') || today(),
    lastSeen: store.get('last-seen') || '',
  };
  store.set('visitor-id', had || Math.random().toString(16).slice(2, 10));
  store.set('visit-count', String(rec.count));
  store.set('first-seen', rec.firstSeen);
  store.set('last-seen', today());
  try { sessionStorage.setItem('visit-record', JSON.stringify(rec)); } catch { /* ignore */ }
  return rec;
};

/* ── where the visitor came from ─────────────────────────────────────────────────────────── */

// [host test, name, kind] — first match wins, so specific hosts come before generic ones.
const SOURCES = [
  [/^gemini\.google\./, 'Gemini', 'ai'],
  [/^mail\.google\./, 'Gmail', 'email'],
  [/^(www\.)?(google)\.[a-z.]+$|^(com\.)?google\.|^googleweblight/, 'Google', 'search'],
  [/(^|\.)bing\.com$/, 'Bing', 'search'],
  [/(^|\.)duckduckgo\.com$/, 'DuckDuckGo', 'search'],
  [/(^|\.)yandex\.[a-z.]+$|^ya\.ru$/, 'Yandex', 'search'],
  [/(^|\.)baidu\.com$/, 'Baidu', 'search'],
  [/(^|\.)ecosia\.org$/, 'Ecosia', 'search'],
  [/(^|\.)search\.yahoo\.com$|(^|\.)yahoo\.com$/, 'Yahoo', 'search'],
  [/(^|\.)search\.brave\.com$/, 'Brave Search', 'search'],
  [/(^|\.)kagi\.com$/, 'Kagi', 'search'],
  [/(^|\.)linkedin\.com$|^lnkd\.in$/, 'LinkedIn', 'social'],
  [/^t\.co$|(^|\.)twitter\.com$|(^|\.)x\.com$/, 'X (Twitter)', 'social'],
  [/(^|\.)facebook\.com$|^fb\.com$|(^|\.)fb\.me$/, 'Facebook', 'social'],
  [/(^|\.)instagram\.com$/, 'Instagram', 'social'],
  [/(^|\.)threads\.net$/, 'Threads', 'social'],
  [/(^|\.)reddit\.com$/, 'Reddit', 'social'],
  [/^news\.ycombinator\.com$/, 'Hacker News', 'social'],
  [/(^|\.)youtube\.com$|^youtu\.be$/, 'YouTube', 'social'],
  [/(^|\.)tiktok\.com$/, 'TikTok', 'social'],
  [/(^|\.)pinterest\./, 'Pinterest', 'social'],
  [/(^|\.)vk\.com$/, 'VK', 'social'],
  [/(^|\.)ok\.ru$/, 'Odnoklassniki', 'social'],
  [/(^|\.)bsky\.app$/, 'Bluesky', 'social'],
  [/^t\.me$|(^|\.)telegram\.(me|org)$/, 'Telegram', 'messenger'],
  [/(^|\.)whatsapp\.com$|^wa\.me$/, 'WhatsApp', 'messenger'],
  [/(^|\.)discord\.com$/, 'Discord', 'messenger'],
  [/(^|\.)slack\.com$/, 'Slack', 'messenger'],
  [/(^|\.)github\.com$|(^|\.)github\.io$/, 'GitHub', 'code'],
  [/(^|\.)gitlab\.com$/, 'GitLab', 'code'],
  [/(^|\.)stackoverflow\.com$/, 'Stack Overflow', 'code'],
  [/(^|\.)dev\.to$/, 'DEV', 'code'],
  [/(^|\.)medium\.com$/, 'Medium', 'code'],
  [/(^|\.)habr\.com$/, 'Habr', 'code'],
  [/^outlook\.|(^|\.)office\.com$|(^|\.)live\.com$/, 'Outlook', 'email'],
  [/^mail\.yahoo\.com$/, 'Yahoo Mail', 'email'],
  [/^chatgpt\.com$|^chat\.openai\.com$/, 'ChatGPT', 'ai'],
  [/(^|\.)perplexity\.ai$/, 'Perplexity', 'ai'],
  [/^claude\.ai$/, 'Claude', 'ai'],
  [/^copilot\.microsoft\.com$/, 'Copilot', 'ai'],
  [/(^|\.)webster\.edu$/, 'Webster University', 'edu'],
];

// Android apps send their package name as the referrer: android-app://<package>
const APPS = {
  'com.google.android.googlequicksearchbox': ['Google app', 'search'],
  'com.linkedin.android': ['LinkedIn app', 'social'],
  'com.instagram.android': ['Instagram app', 'social'],
  'com.twitter.android': ['X (Twitter) app', 'social'],
  'com.facebook.katana': ['Facebook app', 'social'],
  'com.reddit.frontpage': ['Reddit app', 'social'],
  'org.telegram.messenger': ['Telegram app', 'messenger'],
  'com.whatsapp': ['WhatsApp app', 'messenger'],
  'com.discord': ['Discord app', 'messenger'],
  'com.slack': ['Slack app', 'messenger'],
  'com.google.android.gm': ['Gmail app', 'email'],
  'com.google.android.youtube': ['YouTube app', 'social'],
};

const UTM_KINDS = { linkedin: 'social', twitter: 'social', x: 'social', facebook: 'social', instagram: 'social', telegram: 'messenger', whatsapp: 'messenger', google: 'search', github: 'code', email: 'email', newsletter: 'email', resume: 'cv', cv: 'cv' };

/**
 * Turns document.referrer (and ?utm_source) into { name, kind, host, query, text }.
 *   kind: search | social | messenger | email | code | ai | edu | cv | other | direct
 */
export const parseReferrer = (referrer, search = '', ownHost = '') => {
  let q;
  try { q = new URLSearchParams(search); } catch { q = new URLSearchParams(); }
  const utmSource = (q.get('utm_source') || q.get('ref') || '').toLowerCase();

  let host = '';
  let query = '';
  let res = null;

  if (referrer && /^android-app:\/\//.test(referrer)) {
    const pkg = referrer.replace('android-app://', '').split('/')[0];
    const [name, kind] = APPS[pkg] || [pkg, 'other'];
    res = { name, kind, host: pkg };
  } else if (referrer) {
    try {
      const u = new URL(referrer);
      host = u.hostname.replace(/^www\./, '');
      if (ownHost && (host === ownHost.replace(/^www\./, ''))) host = ''; // our own site: not a source
      else {
        const hit = SOURCES.find(([re]) => re.test(host));
        res = hit ? { name: hit[1], kind: hit[2], host } : { name: host, kind: 'other', host };
        query = (u.searchParams.get('q') || u.searchParams.get('p') || u.searchParams.get('text') || '').slice(0, 80);
      }
    } catch { /* not a URL */ }
  }

  if (utmSource && (!res || res.kind === 'other' || res.kind === 'direct')) {
    res = { name: utmSource.charAt(0).toUpperCase() + utmSource.slice(1), kind: UTM_KINDS[utmSource] || 'campaign', host: res ? res.host : '' };
  }
  if (!res) res = { name: 'direct', kind: 'direct', host: '' };

  const campaign = [q.get('utm_medium'), q.get('utm_campaign')].filter(Boolean).join(' / ');
  const text = res.kind === 'direct'
    ? 'direct (typed, bookmark, or an app that hides its link)'
    : `${res.name} (${res.kind})${res.host && res.host !== res.name ? ` · ${res.host}` : ''}${campaign ? ` · campaign: ${campaign}` : ''}${query ? ` · searched “${query}”` : ''}`;
  return { ...res, query, campaign, text };
};

/** Apps that open links in their own browser — they change how the site renders. */
export const inAppBrowser = (ua) => {
  if (/Instagram/.test(ua)) return 'Instagram';
  if (/FBAN|FBAV|FB_IAB|FBIOS/.test(ua)) return 'Facebook';
  if (/LinkedInApp/.test(ua)) return 'LinkedIn';
  if (/TikTok|musical_ly|BytedanceWebview/.test(ua)) return 'TikTok';
  if (/Snapchat/.test(ua)) return 'Snapchat';
  if (/Line\//.test(ua)) return 'LINE';
  if (/Twitter/.test(ua)) return 'X (Twitter)';
  if (/Pinterest/.test(ua)) return 'Pinterest';
  if (/GSA\//.test(ua)) return 'Google app';
  if (/Telegram/i.test(ua)) return 'Telegram';
  if (/; wv\)/.test(ua)) return 'an Android WebView (some app’s built-in browser)';
  if (/iPhone|iPad/.test(ua) && !/Safari\//.test(ua)) return 'an iOS WebView (some app’s built-in browser)';
  return '';
};

/* ── device ──────────────────────────────────────────────────────────────────────────────── */

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

// Samsung model codes (the part after "SM-") → marketing name. Region letters are ignored.
const GALAXY = {
  S938: 'Galaxy S25 Ultra', S936: 'Galaxy S25+', S931: 'Galaxy S25',
  S928: 'Galaxy S24 Ultra', S926: 'Galaxy S24+', S921: 'Galaxy S24',
  S918: 'Galaxy S23 Ultra', S916: 'Galaxy S23+', S911: 'Galaxy S23',
  S908: 'Galaxy S22 Ultra', S906: 'Galaxy S22+', S901: 'Galaxy S22',
  G998: 'Galaxy S21 Ultra', G996: 'Galaxy S21+', G991: 'Galaxy S21',
  F956: 'Galaxy Z Fold6', F741: 'Galaxy Z Flip6', F946: 'Galaxy Z Fold5', F731: 'Galaxy Z Flip5',
  A556: 'Galaxy A55 5G', A546: 'Galaxy A54 5G', A536: 'Galaxy A53 5G', A356: 'Galaxy A35 5G',
  A346: 'Galaxy A34 5G', A256: 'Galaxy A25 5G', A156: 'Galaxy A15 5G', A155: 'Galaxy A15',
};
const galaxyName = (model) => {
  const m = model.match(/^SM-([A-Z]\d{3})/i);
  return m ? GALAXY[m[1].toUpperCase()] : undefined;
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
    const galaxy = model ? galaxyName(model) : '';
    if (!model) return { type, name: 'Android device (model hidden by the browser)' };
    if (galaxy) return { type, name: `Samsung ${galaxy} (${model})` };
    return { type, name: `${brand ? `${brand} ` : ''}${model}${brand === 'Xiaomi' ? ' (Xiaomi family)' : ''}` };
  }
  if (/Macintosh/.test(ua)) return { type: 'PC', name: 'Mac' };
  if (/Windows/.test(ua)) return { type: 'PC', name: 'Windows PC' };
  if (/CrOS/.test(ua)) return { type: 'PC', name: 'Chromebook' };
  if (/Linux/.test(ua)) return { type: 'PC', name: 'Linux PC' };
  return { type: 'unknown', name: 'unknown' };
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
  const ref = parseReferrer(document.referrer, window.location.search, window.location.hostname);
  const rec = visitorRecord();
  const orientation = (screen.orientation && screen.orientation.type ? screen.orientation.type.split('-')[0] : '') || (window.innerHeight >= window.innerWidth ? 'portrait' : 'landscape');
  const standalone = mq('(display-mode: standalone)') || navigator.standalone === true;

  return {
    page: window.location.pathname + window.location.search,
    referrer: ref.text,
    referrerName: ref.name,
    referrerKind: ref.kind,
    campaign: ref.campaign,
    visitorStatus: rec ? rec.status : 'unknown',
    visitCount: rec ? String(rec.count) : '',
    firstSeen: rec ? rec.firstSeen : '',
    lastSeen: rec ? rec.lastSeen : '',
    deviceType: dev.type,
    device: dev.name,
    os: osOf(ua, uaData, hi),
    browser: browserOf(ua),
    inApp: inAppBrowser(ua),
    screen: `${screen.width}x${screen.height} @${dpr}x`,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    orientation,
    standalone: standalone ? 'installed (home-screen app)' : '',
    language: (navigator.languages && navigator.languages.length ? navigator.languages.slice(0, 3).join(', ') : navigator.language) || '',
    timezone: tz,
    localTime: new Date().toLocaleString(),
    network: [
      conn.type || '', // wifi / cellular (Android Chrome)
      conn.effectiveType ? `${conn.effectiveType}${conn.downlink ? `, ~${conn.downlink} Mbps` : ''}${conn.rtt ? `, ${conn.rtt} ms` : ''}` : '',
      conn.saveData ? 'data saver on' : '',
    ].filter(Boolean).join(' · '),
    hardware: [navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} cores` : '', navigator.deviceMemory ? `${navigator.deviceMemory}+ GB RAM` : ''].filter(Boolean).join(' / '),
    touch: navigator.maxTouchPoints ? `touch (${navigator.maxTouchPoints} points)` : 'no touch',
    prefs: [mq('(prefers-color-scheme: dark)') ? 'dark mode' : 'light mode', mq('(prefers-reduced-motion: reduce)') ? 'reduced motion' : ''].filter(Boolean).join(', '),
    ua,
  };
};

/** A one-line description for the contact form message. */
export const deviceSummary = (info) => `${info.device} · ${info.os} · ${info.browser}${info.inApp ? ` (inside ${info.inApp})` : ''}`;
