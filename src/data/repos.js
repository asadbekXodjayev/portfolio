/**
 * GitHub repo curation — YOU control exactly which repos appear in Works and
 * under which category. This keeps the live GitHub feed from dumping every repo.
 *
 * HOW IT WORKS
 *  - Key  = the repo name EXACTLY as it is on GitHub (case-sensitive).
 *  - Value:
 *      category: one of 'Web' | 'AI/ML' | 'Mobile' | 'C++ / C#'  (which filter pill it shows under)
 *      title?:   nicer display name (defaults to the repo name)
 *      desc?:    override description (GitHub descriptions are mostly empty)
 *      featured?: also surface it in the Home "works" teaser
 *      hide?:    set true to explicitly exclude a repo even if SHOW_UNLISTED is true
 *
 *  Repos already shown as a curated project (see projects.js `repo` field) are
 *  skipped automatically — no duplicates. Add a new repo here to share it.
 *
 *  SHOW_UNLISTED: when true, any public repo NOT listed below still appears
 *  under the "Open Source" pill (uncategorized). Leave false to show ONLY the
 *  repos you curate here.
 */

export const SHOW_UNLISTED = false;

/** @type {Record<string, {category: 'Web'|'AI/ML'|'Mobile'|'C++ / C#'|'Python', title?: string, desc?: string, featured?: boolean, hide?: boolean}>} */
export const repoCuration = {
  '-Dijkstra-Path-Finder-C-CLI-': {
    category: 'C++ / C#',
    title: 'Dijkstra Path Finder (C++/CLI)',
    desc: "Interactive WinForms app to build a graph and watch Dijkstra's shortest-path algorithm run step-by-step, with a glassmorphic dark UI.",
  },
  'Dijkstra-Visualizer-Python-': {
    category: 'Python',
    title: 'Dijkstra Visualizer (Python)',
    desc: "Tkinter desktop app that visualizes Dijkstra's algorithm step-by-step on a user-built weighted graph, with login, animated traversal, and a live step log.",
  },
  'WinForms-App-Skeleton': {
    category: 'C++ / C#',
    title: 'WinForms App Skeleton',
    desc: 'Minimal C# Windows Forms (.NET Framework 4.7.2) single-window shell, ready to be extended.',
  },
  'Dijkstra-Visualizer-.NET-8-': {
    category: 'C++ / C#',
    title: 'Dijkstra Visualizer (.NET 8)',
    desc: "C#/.NET 8 WinForms app visualizing Dijkstra's shortest path on a custom glassmorphic canvas, with local SHA-256 authentication.",
  },

  // ── AI/ML full-stack (React front-end + Python AI backend) ────────────────
  'ai-face-recognition': {
    category: 'AI/ML',
    title: 'FACESCAN — Face Analysis',
    desc: 'Real-time biometric terminal — the webcam stream is analyzed live for age, gender, emotion, head pose and landmarks, and recognizes enrolled faces. React + TypeScript + Zustand front-end (EN/RU/UZ) over FastAPI + DeepFace + OpenCV.',
  },
  'ai-chess-bot': {
    category: 'AI/ML',
    title: 'Chess.com AI Bot',
    desc: 'Play chess against a PyTorch neural network (500K+ params) driving minimax with alpha-beta pruning — Chess.com-style React UI, FastAPI backend, dual-layer move validation and synthesized sound.',
  },
  '3-projectAI': {
    category: 'AI/ML',
    title: 'AI Documentation Reader',
    desc: 'ML-powered documentation reader — PyTorch + Python backend paired with a React + Vite web app.',
  },
  'digit-predicterAI': {
    category: 'AI/ML',
    title: 'Digit Predicter (MNIST)',
    desc: 'Handwritten-digit recognition — a CNN trained on MNIST with PyTorch, served over FastAPI to a React + Vite drawing canvas.',
  },
  'ai-pricePredicter': {
    category: 'AI/ML',
    title: 'Real Estate Price Predictor',
    desc: 'Property-price prediction with scikit-learn gradient boosting (R² ~0.92) behind a FastAPI API — glassmorphic React + Vite UI with live sliders and debounced real-time predictions.',
  },
  // 'ai-front-end': {
  //   category: 'AI/ML',
  //   title: 'AI Front-End',
  //   desc: 'Front-end for an AI-powered app.',
  // },
  // 'steel-mobile': {
  //   category: 'Mobile',
  //   title: 'Steel (Mobile)',
  //   desc: 'Mobile build of the Steel Theraphy workout app.',
  // },
  // Add more repos you want to share, e.g.:
  // 'my-ml-notebook': { category: 'AI/ML', title: 'ML Experiments', desc: '...' },
  // 'some-rn-app':    { category: 'Mobile', title: 'My Mobile App' },
};
