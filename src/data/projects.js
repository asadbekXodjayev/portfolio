// Card previews — live home-page screenshots (1440×810), captured headlessly.
// Refresh any of them with: node appgraph/scripts/shoot-previews.mjs
import PrevSteel from '../Image/previews/steel-theraphy.jpg';
import PrevSarbon from '../Image/previews/sarbon.jpg';
import PrevTattoo from '../Image/previews/tattoo-studio.jpg';
import PrevTv from '../Image/previews/tv-app.jpg';
import PrevMoglobe from '../Image/previews/moglobe-trucking.jpg';
import PrevType from '../Image/previews/type-game.jpg';
import PrevData from '../Image/previews/data-algorithms.jpg';
import PrevArt from '../Image/previews/art-gallery.jpg';
import PrevDavinchi from '../Image/previews/davinchi-codex.jpg';
import PrevSpace from '../Image/previews/space-tourism.jpg';
import PrevNova from '../Image/previews/nova-store.jpg';
import PrevAiRecipe from '../Image/previews/ai-recipe.jpg';
import PrevSpotify from '../Image/previews/spotify-stats.jpg';
import PrevWaterpump from '../Image/previews/waterpump.jpg';
import PrevGameStore from '../Image/previews/game-store.jpg';
import PrevSchool from '../Image/previews/online-school.jpg';
import PrevCalculator from '../Image/previews/calculator.jpg';
import PrevImposter from '../Image/previews/imposter.jpg';
import PrevMoodBoard from '../Image/previews/dev-mood-board.jpg';

/**
 * Filter categories for the Works grid. "Open Source" is special-cased in the
 * Works section — it renders live repos from the GitHub API instead of this list.
 */
export const categories = ['All', 'Web', 'AI/ML', 'Mobile', 'C++ / C#', 'Python', 'Open Source'];

/**
 * @typedef {Object} Project
 * @property {string} id        stable slug (also React key)
 * @property {'Web'|'AI/ML'|'C++ / C#'|'Python'} category
 * @property {boolean} [featured]  surfaced in the Home "works" teaser
 * @property {string} title
 * @property {string} desc      one-line description
 * @property {string[]} tags    tech stack tags
 * @property {string} [demo]    live demo URL
 * @property {string} [repo]    GitHub repo name (used to enrich the card with live stars/lang)
 * @property {string} [github]  explicit GitHub URL (for projects without a matched repo)
 * @property {string} [graph]   AppGraph slug — adds a "sys-design" link to the card
 *                              (→ appgraphUrl/apps/<slug>, see data/config.js)
 * @property {*} [img]          imported cover image; falls back to a category gradient
 * @property {boolean} [placeholder]  true => owner should fill in real details/links
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'steel-theraphy',
    graph: 'my-frontend-app',
    category: 'Web',
    featured: true,
    title: 'Steel Theraphy',
    desc: 'Gym workout planner — build training splits, track sets and reps, and save routines you can come back to.',
    tags: ['Next.js', 'state', 'live'],
    demo: 'https://steel.xodjayev.uz/',
    repo: 'steal',
    img: PrevSteel,
  },
  {
    id: 'sarbon',
    category: 'Web',
    featured: true,
    title: 'Sarbon Logistics',
    desc: 'Production logistics platform with multi-language UI, API-driven content and a Feature-Sliced Design architecture managed with Zustand.',
    tags: ['react + Vite', 'API', 'motion', 'zustand', 'FSD', 'i18n', 'business'],
    demo: 'https://new.sarbon.me/',
    repo: 'sarbon',
    img: PrevSarbon,
  },
  {
    id: 'tattoo-studio',
    graph: 'yun',
    category: 'Web',
    title: 'Yun Tattoo Studio',
    desc: 'Marketing site for a tattoo studio — artist galleries, services and a contact flow for bookings.',
    tags: ['Next.js', 'state', 'live', 'business'],
    demo: 'https://yoon.xodjayev.uz/ru/',
    repo: 'Yun',
    img: PrevTattoo,
  },
  {
    id: 'tv-app',
    category: 'Web',
    featured: true,
    title: 'Splay TV App',
    desc: 'Smart-TV streaming interface with D-pad spatial navigation, scrollable content rows and a featured hero — built for the living room.',
    tags: ['Next.js', 'API', 'motion', 'zustand', 'FSD', 'TV'],
    demo: 'https://tv2.splay.glob.uz/',
    repo: 's-play',
    img: PrevTv,
  },
  {
    id: 'moglobe-trucking',
    category: 'Web',
    title: 'MoGlobe Trucking',
    desc: 'Marketing site for a US trucking & logistics company — services, fleet info and quote requests.',
    tags: ['react + Vite', 'state', 'live', 'business'],
    demo: 'https://dev.moglobetrucking.com/',
    repo: 'logistics-update',
    img: PrevMoglobe,
  },
  {
    id: 'type-game',
    category: 'Web',
    title: 'Type Game',
    desc: 'Typing-speed game with live WPM and accuracy scoring, timed runs and a clean retro UI.',
    tags: ['react + Vite', 'state', 'live', 'game'],
    demo: 'https://type.xodjayev.uz/',
    repo: 'type-game',
    img: PrevType,
  },
  {
    id: 'data-algorithms',
    graph: 'data',
    category: 'Web',
    title: 'Data Algorithms',
    desc: 'Interactive visualizer for sorting and pathfinding algorithms, with step-by-step playback so you can watch them run.',
    tags: ['react + Vite', 'state', 'live', 'algorithms'],
    demo: 'https://data.xodjayev.uz/',
    repo: 'data-visual',
    img: PrevData,
  },
  {
    id: 'art-gallery',
    graph: 'codex-art',
    category: 'Web',
    title: 'Art Codex Gallery',
    desc: 'Animated digital art gallery with smooth scroll and motion-driven transitions between works.',
    tags: ['Next.js', 'state', 'motion'],
    demo: 'https://art-codex.vercel.app/',
    repo: 'art',
    img: PrevArt,
  },
  {
    id: 'davinchi-codex',
    graph: 'da-vinchi',
    category: 'Web',
    title: 'DaVinci Codex',
    desc: 'A digital illuminated manuscript dedicated to Leonardo da Vinci — timeline, artworks and inventions with motion-driven detail.',
    tags: ['Next.js', 'frontend', 'motion'],
    demo: 'https://davinchi.xodjayev.uz/',
    repo: 'davinchi-codex',
    img: PrevDavinchi,
  },
  {
    id: 'space-tourism',
    graph: 'space',
    category: 'Web',
    title: 'Space Tourism',
    desc: 'Multi-page space-tourism concept site (destinations, crew, technology) with client-side routing and motion.',
    tags: ['Next.js', 'state', 'motion'],
    demo: 'https://space.xodjayev.uz/',
    repo: 'space',
    img: PrevSpace,
  },
  {
    id: 'nova-store',
    graph: 'e-commerse',
    category: 'Web',
    featured: true,
    title: 'NOVA Store',
    desc: 'E-commerce storefront on Feature-Sliced Design — product catalog, cart and global state with Zustand, data over an API.',
    tags: ['Next.js', 'FSD', 'Zustand', 'Motion', 'API'],
    demo: 'https://store.xodjayev.uz/',
    repo: 'fsd-store',
    img: PrevNova,
  },
  {
    id: 'ai-recipe',
    graph: 'ai-recipe',
    category: 'AI/ML',
    title: 'AI Recipe',
    desc: 'AI-powered recipe generator — enter the ingredients you have and an LLM suggests recipes you can actually cook.',
    tags: ['AI', 'LLM', 'Next.js', 'API'],
    demo: 'https://airecipe.xodjayev.uz/',
    repo: 'ai-reciept',
    img: PrevAiRecipe,
  },
  {
    id: 'dev-mood-board',
    category: 'AI/ML',
    title: 'Dev Mood Board',
    desc: 'AI design-system generator for developers — describe your product idea and get three complete visual directions to start from.',
    tags: ['AI', 'design systems', 'generator'],
    demo: 'https://aifront.sys.xodjayev.uz/',
    img: PrevMoodBoard,
  },
  {
    id: 'spotify-stats',
    graph: 'spotify-app',
    category: 'Web',
    title: 'Spotify Stats',
    desc: 'Spotify dashboard — your top artists, tracks and listening stats pulled live from the Spotify API.',
    tags: ['Next.js', 'API', 'OAuth'],
    demo: 'https://spotifystat.xodjayev.uz/',
    img: PrevSpotify,
  },
  {
    id: 'imposter',
    category: 'Web',
    title: 'Imposter',
    desc: 'One device, one liar — pass-and-play party word game of bluffing and deduction for 3–12 players, right in the browser.',
    tags: ['react', 'game', 'offline', 'i18n'],
    demo: 'https://imposter.xodjayev.uz/',
    img: PrevImposter,
  },
  {
    id: 'imposter-android',
    graph: 'imposter',
    category: 'Mobile',
    title: 'Imposter (Android)',
    desc: 'The original native Android version — single-process, fully offline party game for 3–12 players on one phone, built with Kotlin and Jetpack Compose.',
    tags: ['Kotlin', 'Jetpack Compose', 'Hilt', 'game', 'offline'],
    placeholder: true,
  },
  {
    id: 'waterpump',
    category: 'Web',
    title: 'Water Pump',
    desc: 'Commercial site for a water-pump business — product range and inquiry contact.',
    tags: ['react', 'business', 'live'],
    demo: 'https://waterpump-page.netlify.app/',
    img: PrevWaterpump,
  },
  {
    id: 'game-store',
    category: 'Web',
    title: 'Game Store',
    desc: 'Game storefront — browse, filter and view listings in a responsive catalog.',
    tags: ['react', 'store'],
    demo: 'https://game-store-by-asad.netlify.app/',
    img: PrevGameStore,
  },
  {
    id: 'online-school',
    graph: 'school',
    category: 'Web',
    title: 'Online School',
    desc: 'Landing site for an online school — courses, enrollment and program info.',
    tags: ['Next.js', 'state'],
    demo: 'https://school-neuro.vercel.app/',
    repo: 'school',
    img: PrevSchool,
  },
  {
    id: 'calculator',
    category: 'Web',
    title: 'Calculator',
    desc: 'Classic calculator with keyboard support and a clean, minimal UI.',
    tags: ['react', 'ui'],
    demo: 'https://calculator-by-asad.netlify.app/',
    img: PrevCalculator,
  },

  // Native desktop work (C++/C#/Python) now lives on GitHub — those repos are
  // curated in data/repos.js and rendered live under the "Open Source" pill.
];

export const featuredProjects = projects.filter((p) => p.featured);
