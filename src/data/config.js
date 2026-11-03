/**
 * AppGraph — the sys-design hub rendering interactive architecture graphs
 * (file trees, system topologies, flow diagrams) for the projects below.
 * Deployed at sys.xodjayev.uz; override with VITE_APPGRAPH_URL
 * (e.g. http://localhost:3000 while developing AppGraph locally).
 */
export const appgraphUrl = import.meta.env.VITE_APPGRAPH_URL || 'https://sys.xodjayev.uz';

export const config = {
  name: 'Asadbek Xodjayev',
  fullName: 'Xodjayev Asadbek Utkirov',
  handle: 'asadbekXodjayev',
  role: 'Software Developer',
  // Primary contact for academic / professional enquiries.
  academicEmail: 'asadbekxodjayev@webster.edu',
  email: 'xadasad67@gmail.com',
  socials: {
    github: 'https://github.com/asadbekXodjayev',
    telegram: 'https://t.me/m2dnight',
    linkedin: 'https://www.linkedin.com/in/asadbek-xodjayev-1bb8a624a/',
  },
};

export const interests = [
  { name: 'Football', desc: 'Since childhood, I have been a fan of one football team — stuck in my heart forever.' },
  { name: 'Gym', desc: 'In late 2022 I started working out at home, every night.' },
  { name: 'History', desc: 'From a young age I have been drawn to history and the stories of the past.' },
  { name: 'Movies', desc: 'Grateful for every TV I had growing up — movies shaped a lot of me.' },
  { name: 'Music', desc: 'In recent years I started actively listening to music — it rewired my days.' },
  { name: 'Cars', desc: 'Cars — one of the most intoxicating things mankind has ever forged.' },
  { name: 'Games', desc: 'Honestly not a gamer, but I appreciate good design when I see it.' },
];
