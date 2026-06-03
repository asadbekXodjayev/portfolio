import axios from 'axios';

export const GITHUB_USERNAME = 'asadbekXodjayev';

const CACHE_KEY = 'gh_cache_v1';
const TTL = 5 * 60 * 1000; // 5 minutes

/**
 * @typedef {Object} Repo
 * @property {number} id
 * @property {string} name
 * @property {string|null} description
 * @property {string|null} language
 * @property {number} stars
 * @property {string} updatedAt  ISO date string
 * @property {string} htmlUrl
 * @property {string|null} homepage
 * @property {string[]} topics
 */

// Standard GitHub language -> hex color map (subset covering this account + common langs).
export const LANG_COLORS = {
  JavaScript: '#f7df1e',
  TypeScript: '#3178c6',
  Python: '#3776ab',
  'C++': '#f34b7d',
  C: '#555555',
  'C#': '#178600',
  HTML: '#e34c26',
  CSS: '#563d7c',
  SCSS: '#c6538c',
  Shell: '#89e051',
  Java: '#b07219',
  Go: '#00add8',
  Rust: '#dea584',
  'Jupyter Notebook': '#da5b0b',
  Dockerfile: '#384d54',
  Vue: '#41b883',
};

/** @param {string|null} lang */
export const langColor = (lang) => LANG_COLORS[lang] || '#8b8b8b';

/** @param {any} r raw GitHub repo @returns {Repo} */
const normalize = (r) => ({
  id: r.id,
  name: r.name,
  description: r.description,
  language: r.language,
  stars: r.stargazers_count ?? 0,
  updatedAt: r.updated_at,
  htmlUrl: r.html_url,
  homepage: r.homepage || null,
  topics: r.topics || [],
});

const readCache = () => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const { data, ts } = JSON.parse(raw);
    if (Date.now() - ts < TTL && Array.isArray(data)) return data;
  } catch {
    /* ignore malformed cache */
  }
  return null;
};

const writeCache = (data) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, ts: Date.now() }));
  } catch {
    /* storage may be unavailable (private mode) — fine */
  }
};

/**
 * Fetch public repos for the configured user, newest first.
 * Uses a 5-minute localStorage cache to avoid GitHub rate limits.
 * @param {{ force?: boolean }} [opts]
 * @returns {Promise<Repo[]>}
 */
export const fetchRepos = async ({ force = false } = {}) => {
  if (!force) {
    const cached = readCache();
    if (cached) return cached;
  }
  const { data } = await axios.get(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos`,
    { params: { per_page: 100, sort: 'updated' }, timeout: 10000 },
  );
  const repos = (Array.isArray(data) ? data : [])
    .filter((r) => !r.fork)
    .map(normalize);
  writeCache(repos);
  return repos;
};

/** Format an ISO date as e.g. "Jun 3, 2026". @param {string} iso */
export const formatUpdated = (iso) => {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return '';
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
