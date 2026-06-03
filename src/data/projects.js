import Img1 from '../Image/Screenshot 2024-06-06 155652.webp';
import Img2 from '../Image/Screenshot 2024-06-06 155702.webp';
import Img4 from '../Image/Screenshot 2024-06-06 155751.webp';
import Img6 from '../Image/img.png';
import Img7 from '../Image/img_1.png';
import Img8 from '../Image/img_2.png';
import Img9 from '../Image/Снимок экрана (284).png';
import Img10 from '../Image/Снимок экрана (285).png';
import Img11 from '../Image/image.png';
import Img12 from '../Image/Снимок экрана (522).png';
import Img13 from '../Image/Снимок экрана (526).png';
import Img14 from '../Image/Screenshot 2026-05-06 162242.png';
import Img15 from '../Image/Screenshot 2026-05-07 133609.png';
import Img16 from '../Image/Screenshot 2026-05-13 111213.png';
import Img17 from '../Image/Screenshot 2026-05-30 093140.png';
import Img18 from '../Image/Screenshot 2026-05-30 092643.png';

/**
 * Filter categories for the Works grid. "Open Source" is special-cased in the
 * Works section — it renders live repos from the GitHub API instead of this list.
 */
export const categories = ['All', 'Web', 'AI/ML', 'Mobile', 'C++ / C#', 'Open Source'];

/**
 * @typedef {Object} Project
 * @property {string} id        stable slug (also React key)
 * @property {'Web'|'AI/ML'|'C++ / C#'} category
 * @property {boolean} [featured]  surfaced in the Home "works" teaser
 * @property {string} title
 * @property {string} desc      one-line description
 * @property {string[]} tags    tech stack tags
 * @property {string} [demo]    live demo URL
 * @property {string} [repo]    GitHub repo name (used to enrich the card with live stars/lang)
 * @property {string} [github]  explicit GitHub URL (for projects without a matched repo)
 * @property {*} [img]          imported cover image; falls back to a category gradient
 * @property {boolean} [placeholder]  true => owner should fill in real details/links
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'steel-theraphy',
    category: 'Web',
    featured: true,
    title: 'Steel Theraphy',
    desc: 'Gym workout planner with saved routines.',
    tags: ['Next.js', 'state', 'live'],
    demo: 'https://steel-theraphy.vercel.app/',
    repo: 'steal',
    img: Img9,
  },
  {
    id: 'sarbon',
    category: 'Web',
    featured: true,
    title: 'Sarbon Logistics',
    desc: 'Production logistics platform with i18n and FSD architecture.',
    tags: ['react + Vite', 'API', 'motion', 'zustand', 'FSD', 'Localization', 'business'],
    demo: 'https://new.sarbon.me/',
    repo: 'sarbon',
    img: Img17,
  },
  {
    id: 'tattoo-studio',
    category: 'Web',
    title: 'Yun Tattoo Studio',
    desc: 'Marketing site for a tattoo studio.',
    tags: ['Next.js', 'state', 'live', 'business'],
    demo: 'https://yun-tattoo.vercel.app/',
    repo: 'Yun',
    img: Img11,
  },
  {
    id: 'tv-app',
    category: 'Web',
    featured: true,
    title: 'Splay TV App',
    desc: 'Smart-TV streaming UI with spatial navigation.',
    tags: ['Next.js', 'API', 'motion', 'zustand', 'FSD'],
    demo: 'https://tv2.splay.glob.uz/',
    repo: 's-play',
    img: Img13,
  },
  {
    id: 'moglobe-trucking',
    category: 'Web',
    title: 'MoGlobe Trucking',
    desc: 'US logistics company website.',
    tags: ['react + Vite', 'state', 'live', 'business'],
    demo: 'https://logistics-update.vercel.app/',
    repo: 'logistics-update',
    img: Img8,
  },
  {
    id: 'type-game',
    category: 'Web',
    title: 'Type Game',
    desc: 'Typing-speed game with live WPM scoring.',
    tags: ['react + Vite', 'state', 'live', 'game'],
    demo: 'https://type-game-v2.vercel.app/',
    repo: 'type-game',
    img: Img6,
  },
  {
    id: 'data-algorithms',
    category: 'Web',
    title: 'Data Algorithms',
    desc: 'Interactive sorting & pathfinding visualizer.',
    tags: ['react + Vite', 'state', 'live', 'algorithms'],
    demo: 'https://data-visualy.vercel.app/',
    repo: 'data-visual',
    img: Img18,
  },
  {
    id: 'art-gallery',
    category: 'Web',
    title: 'Art Codex Gallery',
    desc: 'Animated art gallery experience.',
    tags: ['Next.js', 'state', 'motion'],
    demo: 'https://art-codex.vercel.app/',
    repo: 'art',
    img: Img12,
  },
  {
    id: 'davinchi-codex',
    category: 'AI/ML',
    title: 'DaVinci Codex',
    desc: 'AI-assisted creative / art generation experience.',
    tags: ['AI', 'Next.js', 'API', 'motion'],
    demo: 'https://davinchi-codex.vercel.app/',
    repo: 'davinchi-codex',
  },
  {
    id: 'space-tourism',
    category: 'Web',
    title: 'Space Tourism',
    desc: 'Multi-page space tourism concept site.',
    tags: ['Next.js', 'state', 'motion'],
    demo: 'https://space-cosmic.vercel.app/',
    repo: 'space',
    img: Img14,
  },
  {
    id: 'nova-store',
    category: 'Web',
    featured: true,
    title: 'NOVA Store',
    desc: 'E-commerce storefront built on Feature-Sliced Design.',
    tags: ['Next.js', 'FSD', 'Zustand', 'Motion', 'API'],
    demo: 'https://nova-fsd.vercel.app/',
    repo: 'fsd-store',
    img: Img16,
  },
  {
    id: 'ai-recipe',
    category: 'AI/ML',
    title: 'AI Recipe',
    desc: 'AI-powered recipe recommendation app.',
    tags: ['AI', 'Next.js', 'API', 'state'],
    demo: 'https://ai-reciept.vercel.app/',
    repo: 'ai-reciept',
    img: Img15,
  },
  {
    id: 'spotify-stats',
    category: 'Web',
    title: 'Spotify Stats',
    desc: 'Listening-statistics dashboard via the Spotify API.',
    tags: ['Next.js', 'API', 'state'],
    demo: 'https://spotify-api-flax.vercel.app/',
    img: Img10,
  },
  {
    id: 'waterpump',
    category: 'Web',
    title: 'Water Pump',
    desc: 'Commercial site for a water-pump business.',
    tags: ['react', 'business', 'live'],
    demo: 'https://waterpump-page.netlify.app/',
    img: Img2,
  },
  {
    id: 'game-store',
    category: 'Web',
    title: 'Game Store',
    desc: 'Storefront for browsing and listing games.',
    tags: ['react', 'store'],
    demo: 'https://game-store-by-asad.netlify.app/',
    img: Img4,
  },
  {
    id: 'online-school',
    category: 'Web',
    title: 'Online School',
    desc: 'Landing site for an online school.',
    tags: ['Next.js', 'state'],
    demo: 'https://school-neuro.vercel.app/',
    repo: 'school',
    img: Img7,
  },
  {
    id: 'calculator',
    category: 'Web',
    title: 'Calculator',
    desc: 'Classic calculator with a clean UI.',
    tags: ['react', 'ui'],
    demo: 'https://calculator-by-asad.netlify.app/',
    img: Img1,
  },

  // ── Native desktop work (C++ / C# Windows Forms) ──────────────────────────
  // PLACEHOLDERS: edit titles/desc/links, add a `github` URL or `demo`, and a
  // cover image when available. These aren't on GitHub yet, so they're curated
  // here by hand. `placeholder: true` just hints that the details are stubbed.
  {
    id: 'winforms-inventory',
    category: 'C++ / C#',
    placeholder: true,
    title: 'Inventory Manager',
    desc: 'Windows Forms desktop app for stock & sales tracking.',
    tags: ['C#', '.NET', 'WinForms', 'SQL'],
  },
  {
    id: 'cpp-algorithms-suite',
    category: 'C++ / C#',
    placeholder: true,
    title: 'C++ Algorithms Suite',
    desc: 'Native console toolkit: data structures & algorithm demos.',
    tags: ['C++', 'STL', 'algorithms'],
  },
  {
    id: 'winforms-utility',
    category: 'C++ / C#',
    placeholder: true,
    title: 'Desktop Utility Tool',
    desc: 'Windows Forms utility for everyday automation.',
    tags: ['C#', '.NET', 'WinForms'],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
