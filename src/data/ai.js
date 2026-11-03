/**
 * AI studies and goals — shown on Home and About.
 * Studies mirror `currentlyExploring` in about.js; goals mirror the
 * "Where I am heading" post in blog.json. Edit them together.
 */

export const aiStudies = [
  { name: 'PyTorch', note: 'Training small models end to end, from data to evaluation.' },
  { name: 'LLM applications', note: 'Retrieval, agents and structured output.' },
  { name: 'Hugging Face', note: 'Transformers and datasets.' },
  { name: 'Agent orchestration', note: 'Multi-agent coding workflows across Claude, GPT and Gemini.' },
  { name: 'Automated QA', note: 'Playwright and Allure, with AI-assisted test generation.' },
];

export const aiGoals = [
  {
    title: 'AI systems engineering',
    body: 'Understand the whole path of a model: data, training, serving, and the product on top. Start with tooling around training and inference.',
  },
  {
    title: 'Security of AI agents',
    body: 'Keep building on my SkillSpector work: detection and safer defaults for agent skills and tool integrations.',
  },
  {
    title: 'Research that can be cited',
    body: 'Turn notes into a reproducible experiment, and a preprint or a well-documented repository others can rerun.',
  },
  {
    title: 'Upstream contributions',
    body: 'Fewer, better pull requests to AI infrastructure projects, each with a test and a clear explanation.',
  },
];

export const aiBuilt = ['Digit recognizer', 'Chess bot', 'Document reader', 'Face recognition app', 'Price predictor'];
