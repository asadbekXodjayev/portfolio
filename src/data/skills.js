/**
 * @typedef {Object} Skill
 * @property {string} name
 * @property {number} level  0-100 proficiency
 * @property {string} [colorKey]  optional GitHub-language name for a color dot (see lib/github LANG_COLORS)
 *
 * @typedef {Object} SkillGroup
 * @property {string} title
 * @property {Skill[]} items
 * @property {string} [variant]   TerminalWindow variant: 'phosphor-green' | 'cyan' | 'amber'
 * @property {boolean} [highlight] elevated styling (used for the AI/ML tier)
 * @property {string} [badge]      small badge label shown on the group header
 */

/** @type {SkillGroup[]} */
export const skillGroups = [
  {
    title: 'languages.sys',
    items: [
      { name: 'JavaScript', level: 98, colorKey: 'JavaScript' },
      { name: 'TypeScript', level: 92, colorKey: 'TypeScript' },
      { name: 'Python', level: 85, colorKey: 'Python' },
      { name: 'C++', level: 80, colorKey: 'C++' },
      { name: 'C#', level: 75, colorKey: 'C#' },
      { name: 'Dart', level: 68, colorKey: 'Dart' },
      { name: 'Kotlin', level: 65, colorKey: 'Kotlin' },
      { name: 'Swift', level: 62, colorKey: 'Swift' },
    ],
  },
  {
    title: 'frontend.sys',
    items: [
      { name: 'React', level: 99 },
      { name: 'Next.js', level: 95 },
      { name: 'Framer Motion', level: 90 },
      { name: 'styled-components / Sass', level: 100 },
      { name: 'Tailwind CSS', level: 88 },
      { name: 'HTML5 / CSS3', level: 100 },
      { name: 'Zustand', level: 90 },
      { name: 'shadcn/ui', level: 85 },
      { name: 'FSD', level: 82 },
    ],
  },
  {
    title: 'mobile.sys',
    items: [
      { name: 'React Native', level: 75 },
      { name: 'Flutter', level: 70 },
      { name: 'Kotlin', level: 65 },
      { name: 'Swift', level: 62 },
    ],
  },
  {
    title: 'ai-ml.sys',
    variant: 'cyan',
    highlight: true,
    badge: 'Machine Learning',
    items: [
      { name: 'Python (ML)', level: 82, colorKey: 'Python' },
      { name: 'PyTorch', level: 70 },
      { name: 'TensorFlow / Keras', level: 65 },
      { name: 'scikit-learn', level: 72 },
      { name: 'NumPy / Pandas', level: 80 },
      { name: 'Hugging Face', level: 68 },
      { name: 'OpenAI API', level: 85 },
      { name: 'LangChain', level: 66 },
      { name: 'Jupyter', level: 78 },
    ],
  },
  {
    title: 'backend.sys',
    items: [
      { name: 'Node.js', level: 65 },
      { name: 'Django', level: 60 },
      { name: 'FastAPI', level: 72 },
      { name: 'REST APIs', level: 85 },
      { name: 'SQL', level: 55 },
    ],
  },
  {
    title: 'tooling.sys',
    items: [
      { name: 'Git', level: 90 },
      { name: 'Vite / Webpack', level: 95 },
      { name: 'npm', level: 95 },
      { name: 'Docker', level: 60 },
      { name: 'Figma', level: 90 },
    ],
  },
  {
    title: 'platforms.sys',
    items: [
      { name: 'Windows (native C++/C#)', level: 80 },
      { name: 'Linux', level: 70 },
      { name: 'Vercel / Netlify', level: 92 },
    ],
  },
];

// Top skills for the Home "skills" teaser tag row.
export const topSkills = [
  'React',
  'TypeScript',
  'Next.js',
  'Framer Motion',
  'Python',
  'PyTorch',
  'C++',
  'C#',
  'OpenAI API',
  'Node.js',
];
