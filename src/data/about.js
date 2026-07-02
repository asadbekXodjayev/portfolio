/**
 * About-page content, extracted out of the component so copy lives with the
 * rest of the site data. HTML in `bio` lines is intentional — rendered as
 * markup (strong/em) inside the bio terminal.
 */

export const bioLines = [
  { t: '<strong>name:</strong> Xodjayev Asadbek Utkirov' },
  { t: '<strong>user:</strong> @xodjayev' },
  { t: '<strong>role:</strong> Front-end &amp; native desktop developer' },
  { t: '<strong>loc:</strong> Uzbekistan' },
  { t: '<strong>focus:</strong> React, TypeScript, AI/ML &amp; agents, native C++/C#' },
  { t: '<strong>email:</strong> xadasad67@gmail.com' },
  {
    t: "Hi — I'm <strong>Asadbek</strong>. I build fast, considered web interfaces with React and a stubborn bias for clean, accessible UI. Before the web pulled me in, I was writing <em>C++ and C# Windows Forms</em> apps, and that low-level habit still shapes how I think about performance and detail.",
  },
  {
    t: 'These days I split my time between shipping production front-ends and going deeper on <em>AI/ML</em> — wiring up models, prompts, and data pipelines into things people actually use. I care about typography, motion that means something, and shipping.',
  },
  {
    t: "I run a full <strong>AI-assisted engineering ecosystem</strong> — coding agents that scaffold and review features, and automated QA agents that write and self-heal end-to-end tests — layered over the models and platforms I use daily (<em>Claude, GPT, Gemini</em>, and more). I also wire APIs into everything I ship: <em>OpenAI, Claude, Telegram Bot, GitHub, Spotify</em> and internal services documented with <em>OpenAPI</em>.",
  },
];

/**
 * @typedef {Object} TimelineEntry
 * @property {string} year
 * @property {string} title
 * @property {string} body
 */

/** @type {TimelineEntry[]} */
export const timeline = [
  {
    year: '~2021',
    title: 'Started with native code',
    body: 'Cut my teeth on C++ and C# — building Windows Forms desktop apps and console tools. Learned how software actually runs before learning how to make it pretty.',
  },
  {
    year: '2022',
    title: 'Moved to the web',
    body: 'Fell for the front-end. Went deep on JavaScript, then React — and started shipping real sites for real businesses.',
  },
  {
    year: '2023 — 2024',
    title: 'Production front-ends',
    body: 'Built logistics platforms, e-commerce, and a smart-TV app. Adopted TypeScript, Next.js, Feature-Sliced Design, state management, and i18n as daily tools.',
  },
  {
    year: '2025',
    title: 'AI/ML + craft',
    body: 'Integrating AI into products — OpenAI, LangChain, PyTorch — while sharpening design, motion, and accessibility on everything I build.',
  },
  {
    year: '2026 — now',
    title: 'AI agents & automation',
    body: 'Building with a full stack of AI agents — Claude, GPT, Gemini and more — to automate coding, code review, and QA. Playwright + Allure now cover regression testing end-to-end, while OpenAPI, Telegram Bot, and Claude/OpenAI APIs tie products together under CI/CD pipelines.',
  },
];

export const currentlyExploring = [
  { name: 'PyTorch', note: 'training small models end-to-end' },
  { name: 'LLM apps', note: 'RAG, agents, structured output' },
  { name: 'Hugging Face', note: 'transformers & datasets' },
  { name: 'Three.js', note: 'a bit of 3D for the web' },
  { name: 'AI agent orchestration', note: 'Claude, GPT, Gemini — multi-agent coding workflows' },
  { name: 'QA automation', note: 'Playwright + Allure, AI-generated test suites' },
];
