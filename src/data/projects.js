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
import AcademicPortfolio from '../Image/Снимок экрана (550).png';
import PrevAppGraph from '../Image/previews/appgraph.jpg';
import PrevInteractiveWorks from '../Image/previews/interactive-works.jpg';
import PrevCodexLuminara from '../Image/previews/codex-luminara.jpg';
import PrevVoid from '../Image/previews/void.jpg';
import PrevCosmic from '../Image/previews/cosmic.jpg';
import PrevAeternum from '../Image/previews/aeternum.jpg';
import PrevVantage from '../Image/previews/vantage.jpg';
import PrevNeonfall from '../Image/previews/neonfall.jpg';
import PrevStrata from '../Image/previews/strata.jpg';
import PrevCompile from '../Image/previews/compile.jpg';
import PrevSubstrate from '../Image/previews/substrate.jpg';
import PrevEndlessDrive from '../Image/previews/endless-drive.jpg';
import PrevBackrooms from '../Image/previews/backrooms.jpg';
import PrevCTM from '../Image/previews/ctm.jpg';
import Corvette from '../Image/Снимок экрана (562).png';

/**
 * Filter categories for the Works grid. "Open Source" is special-cased in the
 * Works section — it renders live repos from the GitHub API instead of this list.
 */
export const categories = ['All', 'Web', 'AI/ML', 'Mobile', 'C++ / C#', 'Python', 'Open Source'];

/**
 * @typedef {Object} Project
 * @property {string} id        stable slug (also React key)
 * @property {'Web'|'AI/ML'|'C++ / C#'|'Python'} category
 * @property {boolean} [featured]  shown as a flagship card on the Works page
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
 *
 * Array order is deliberate — it drives the Works page render order: real
 * production/client work first, personal web demos next, Three.js showcase
 * pieces after that (see PreviewWorks/data/repos.js for the native C++/C#
 * tools, which render last of all).
 */

/** @type {Project[]} */
export const projects = [
  // ── production / client work ───────────────────────────────────────────
  {
    id: 'ctm',
    category: 'Web',
    featured: true,
    title: 'Central Trade Market (CTM)',
    desc: 'Production freight & carrier marketplace for Uzbekistan and the CIS — verified cargo, warehouse and carrier listings with direct negotiation, search by route and a token-gated contact economy over the Karvon API.',
    tags: ['Next.js', 'TypeScript', 'Tailwind v4', 'Zustand', 'i18n', 'marketplace', 'business'],
    demo: 'https://centraltrademarket.com/',
    img: PrevCTM,
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
    featured: true,
    title: 'MoGlobe Trucking',
    desc: 'Marketing site for a US trucking & logistics company — services, fleet info and quote requests.',
    tags: ['react + Vite', 'state', 'live', 'business'],
    demo: 'https://dev.moglobetrucking.com/',
    repo: 'logistics-update',
    img: PrevMoglobe,
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
    id: 'interactive-works',
    graph: 'interactive-works',
    category: 'Web',
    featured: true,
    title: 'Interactive Works — Sphere Gallery',
    desc: 'Phantom.land-style 3D work gallery — the camera sits inside a sphere lined with project cards: inertial drag, a custom lens-distortion shader (vignette, edge blur, grain), list view, era filter and deep-linked detail pages.',
    tags: ['Three.js', 'GSAP', 'TypeScript', 'WebGL', 'GLSL', 'Vite'],
    github: 'https://github.com/asadbekXodjayev/interactive-works',
    demo: 'https://asadbe.uz/',
    img: PrevInteractiveWorks,
  },
  {
    id: 'codex-luminara',
    graph: 'codex-luminara',
    category: 'Web',
    title: 'Codex Luminara — 3D Art Gallery',
    desc: 'A portal to the Renaissance: thirteen public-domain masterworks hung inside a WebGL sphere with gilded frames, illuminated folio pages (catalogue, palette, curiosities), era filters and a low-volume classical soundtrack.',
    tags: ['Three.js', 'GSAP', 'TypeScript', 'WebGL', 'art', 'audio'],
    github: 'https://github.com/asadbekXodjayev/art-ThreeJs',
    demo: 'https://art.asadbe.uz/',
    img: PrevCodexLuminara,
  },
  {
    id: 'Corvette ThreeJS',
    category: 'Web',
    title: 'Storytelling Corvette',
    desc: 'A 3D storytelling experience built with Three.js, featuring a detailed Corvette model, interactive animations, and immersive audio effects.',
    tags: ['Three.js', 'GSAP', 'TypeScript', 'WebGL', 'art', 'audio'],
    github: 'https://github.com/asadbekXodjayev/Threejs-corvette',
    demo: 'https://corvette.asadbe.uz/',
    img: Corvette,
  },
  {
    id: 'waterpump',
    category: 'Web',
    title: 'Water Pump',
    desc: 'Commercial site for a water-pump business — product range and inquiry contact.',
    tags: ['react', 'business', 'live'],
    demo: 'https://waterpump.xodjayev.uz/',
    img: PrevWaterpump,
  },
  {
    id: 'online-school',
    graph: 'school',
    category: 'Web',
    title: 'Online School',
    desc: 'Landing site for an online school — courses, enrollment and program info.',
    tags: ['Next.js', 'state'],
    demo: 'https://school.xodjayev.uz/',
    repo: 'school',
    img: PrevSchool,
  },
  {
    id: 'nova-store',
    graph: 'e-commerse',
    category: 'Web',
    title: 'NOVA Store',
    desc: 'E-commerce storefront on Feature-Sliced Design — product catalog, cart and global state with Zustand, data over an API.',
    tags: ['Next.js', 'FSD', 'Zustand', 'Motion', 'API'],
    demo: 'https://store.xodjayev.uz/',
    repo: 'fsd-store',
    img: PrevNova,
  },
  {
    id: 'steel-theraphy',
    graph: 'my-frontend-app',
    category: 'Web',
    title: 'Steel Theraphy',
    desc: 'Gym workout planner — build training splits, track sets and reps, and save routines you can come back to.',
    tags: ['Next.js', 'state', 'live'],
    demo: 'https://steel.xodjayev.uz/',
    repo: 'steal',
    img: PrevSteel,
  },

  // ── personal web / demos ────────────────────────────────────────────────
  {
    id: 'academic-portfolio',
    category: 'Web',
    title: 'Academic Portfolio',
    desc: 'Professional and academic portfolio built for graduate programme applications — Vite + React + TypeScript, triple-language i18n (EN/RU/UZ), Zustand, Motion v12, and a full academic profile with coursework, research interests, and recommendations.',
    tags: ['Vite', 'TypeScript', 'React', 'i18n', 'Motion', 'Zustand', 'academic'],
    demo: 'https://asadbek.xodjayev.uz/',
    img: AcademicPortfolio,
  },
  {
    id: 'appgraph',
    category: 'Web',
    title: 'AppGraph — sys-design hub',
    desc: 'One hub for the architecture of all 19 of my apps — interactive file trees, zoned system topologies and flow diagrams, laid out collision-free with ELK and explorable as an Obsidian-style cluster.',
    tags: ['Next.js', 'TypeScript', 'ELK.js', 'd3-force', 'SVG', 'meta'],
    demo: 'https://sys.xodjayev.uz/',
    img: PrevAppGraph,
  },
  {
    id: 'art-gallery',
    graph: 'codex-art',
    category: 'Web',
    featured: true,
    title: 'Art Codex Gallery',
    desc: 'Animated digital art gallery with smooth scroll and motion-driven transitions between works.',
    tags: ['Next.js', 'state', 'motion'],
    demo: 'https://art.xodjayev.uz/',
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
    id: 'game-store',
    category: 'Web',
    title: 'Game Store',
    desc: 'Game storefront — browse, filter and view listings in a responsive catalog.',
    tags: ['react', 'store'],
    demo: 'https://game-store-by-asad.netlify.app/',
    img: PrevGameStore,
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

  // ── Three.js / WebGL showcase pieces ────────────────────────────────────
  {
    id: 'void',
    graph: 'void-threejs',
    category: 'Web',
    title: 'VOID — Grimoire of the Dead',
    desc: 'A black-magic rite forged in WebGL — a scroll-driven occult grimoire of five movements (The Black Gate, The Bone Oracle, The Sigil Wakes, The Summoning, The Void) with a glowing skull, drifting embers and animated sigils.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'WebGL', 'GLSL', 'scrollytelling'],
    github: 'https://github.com/asadbekXodjayev/void-threeJs',
    demo: 'https://void.xodjayev.uz/',
    img: PrevVoid,
  },
  {
    id: 'cosmic',
    graph: 'cosmic-threejs',
    category: 'Web',
    title: 'COSMIC — Atlas of Extreme Objects',
    desc: 'An interactive WebGL atlas of five cosmic extremes — black hole, galaxy, nebula, pulsar and star — falling through real astrophysics with a scroll-driven descent, GPU particle fields and an accretion-disk shader.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'WebGL', 'GLSL', 'astronomy'],
    demo: 'https://cosmic.xodjayev.uz/',
    img: PrevCosmic,
  },
  {
    id: 'aeternum',
    graph: 'aeternum-threejs',
    category: 'Web',
    title: 'AETERNUM — Memento Mori',
    desc: 'An interactive relic forged in WebGL — a four-act meditation on mortality (The Descent, The Relic, The Reckoning, Eternity) built around a smouldering stone with scroll-bound camera moves and film-grain post.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'WebGL', 'GLSL', 'art'],
    demo: 'https://3js.xodjayev.uz/',
    img: PrevAeternum,
  },
  {
    id: 'vantage',
    graph: 'vantage-threejs',
    category: 'Web',
    title: 'VANTAGE — 3D Car Walkaround',
    desc: 'A scroll-driven walkaround of a 2026 concept car rendered as real geometry in a virtual studio — silhouette → exterior → engine teardown → live paint configurator (MeshPhysicalMaterial clearcoat) → telemetry, with LOD for mobile.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'WebGL', 'PBR', 'automotive'],
    demo: 'https://cars.xodjayev.uz/',
    img: PrevVantage,
  },
  {
    id: 'neonfall',
    graph: 'neonfall-threejs',
    category: 'Web',
    title: 'NEONFALL — Arcade Experience',
    desc: 'A scroll-driven neon-noir arcade that boots up around you — a world hub of game portals, two procedural low-poly levels (Neon Spire, Undergrid) and a playable scout-ship arena, lit by an UnrealBloom glow pipeline.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'WebGL', 'Bloom', 'game'],
    demo: 'https://gaming.xodjayev.uz/',
    img: PrevNeonfall,
  },
  {
    id: 'strata',
    graph: 'strata-threejs',
    category: 'Web',
    title: 'STRATA — Scroll Through Deep Time',
    desc: 'An interactive timeline where scroll is time — descend from 3000 BCE to today through six eras, each anchored by a procedurally generated monument with era-tinted fog and light, plus an artifact ledger.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'WebGL', 'procedural', 'history'],
    demo: 'https://history.xodjayev.uz/',
    img: PrevStrata,
  },
  {
    id: 'compile',
    graph: 'compile-threejs',
    category: 'Web',
    title: 'COMPILE — Source Becomes System',
    desc: 'A scroll-driven visualization of a compiler pipeline — source text assembles into tokens and a syntax tree, imports resolve into a force-directed dependency graph, the graph executes as light pulses, then scales to a full architecture.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'WebGL', 'InstancedMesh', 'dataviz'],
    demo: 'https://coding.xodjayev.uz/',
    img: PrevCompile,
  },
  {
    id: 'substrate',
    graph: 'substrate-threejs',
    category: 'Web',
    title: 'SUBSTRATE — A Zoom Across Scale',
    desc: 'A scroll-driven zoom across nine orders of magnitude — from a single transistor gate to a chip, a device, a global network and a planet of data — with instanced network nodes and an adaptive DPR ladder for mobile.',
    tags: ['Three.js', 'GSAP', 'Lenis', 'WebGL', 'InstancedMesh', 'tech'],
    demo: 'https://tech.xodjayev.uz/',
    img: PrevSubstrate,
  },
  {
    id: 'endless-drive',
    graph: 'endless-drive-threejs',
    category: 'Web',
    title: 'ENDLESS DRIVE — Procedural Road Trip',
    desc: 'A chill, fully playable 3D driving game — no score, no game over, just a procedurally generated road with dynamic weather, eight selectable vehicles, cinematic camera modes and a photo mode.',
    tags: ['Three.js', 'WebGL', 'procedural', 'game', 'playable'],
    demo: 'https://game.xodjayev.uz/',
    img: PrevEndlessDrive,
  },
  {
    id: 'backrooms',
    category: 'Web',
    title: 'The Backrooms',
    desc: 'First-person liminal-horror maze in WebGL — noclip into an endless, fully-sealed procedural labyrinth of mono-yellow rooms where a sanity system drives the fog, grain, audio and entity behaviour. Zero third-party assets.',
    tags: ['Three.js', 'WebGL', 'GLSL', 'procedural', 'WebAudio', 'game'],
    demo: 'https://backrooms.xodjayev.uz/',
    img: PrevBackrooms,
  },

  // Native desktop work (C++/C#/Python) now lives on GitHub — those repos are
  // curated in data/repos.js and rendered live under the "Open Source" pill,
  // last of all (see repoCuration order there).
];

// Explicit order for the Home "works" teaser — independent of the Works-page
// array order above, so the homepage can spotlight a fixed set regardless of
// where each project sits in the full (production-first) Works ranking.
const HOME_FEATURED_ORDER = ['ctm', 'interactive-works', 'sarbon', 'tv-app', 'moglobe-trucking', 'art-gallery'];

export const featuredProjects = HOME_FEATURED_ORDER
  .map((id) => projects.find((p) => p.id === id))
  .filter(Boolean);
