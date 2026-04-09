export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export const setDocTitle = (section) => {
  if (typeof document !== 'undefined') {
    document.title = section ? `asad | ${section}` : 'asad | portfolio';
  }
};
