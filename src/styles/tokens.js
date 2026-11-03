// Design tokens — monochrome pixel system.
//
// Only black and white (plus the greys between them).
//   dark mode  : black page, white ink
//   light mode : white page, black ink
// Emphasis is done by INVERSION (ink-on-paper flips to paper-on-ink), not by color.
//
// Key names from earlier themes are kept so every styled component keeps working:
//   primary = accent = ink  (the "strong" color)     accentInk = text that sits ON an ink fill

export const lightColors = {
  bg: '#FFFFFF',
  dot: '#EBEBEB', // the 2px checker squares on the page
  bgSecondary: '#FFFFFF', // panels
  surface: '#F0F0F0',
  border: '#BDBDBD', // soft dividers
  ink: '#000000', // hard pixel borders
  shadow: '#000000', // hard offset shadows
  text: '#000000',
  textMuted: '#4D4D4D',
  textDim: '#767676',
  primary: '#000000',
  accent: '#000000',
  accentInk: '#FFFFFF',
  secondary: '#000000',
  warning: '#000000',
  danger: '#000000',
  // pixel-scene palette (greys + black/white only)
  sky: '#C4C4C4',
  cloud: '#FFFFFF',
  skin: '#FFFFFF',
  navy: '#000000',
  blue: '#4D4D4D',
  light: '#8C8C8C',
  sceneAccent: '#FFFFFF',
};

export const darkColors = {
  bg: '#000000',
  dot: '#151515',
  bgSecondary: '#0B0B0B',
  surface: '#1A1A1A',
  border: '#4A4A4A',
  ink: '#FFFFFF',
  shadow: '#FFFFFF',
  text: '#FFFFFF',
  textMuted: '#BDBDBD',
  textDim: '#8C8C8C',
  primary: '#FFFFFF',
  accent: '#FFFFFF',
  accentInk: '#000000',
  secondary: '#FFFFFF',
  warning: '#FFFFFF',
  danger: '#FFFFFF',
  sky: '#2B2B2B',
  cloud: '#444444',
  skin: '#FFFFFF',
  navy: '#000000',
  blue: '#8A8A8A',
  light: '#CFCFCF',
  sceneAccent: '#FFFFFF',
};

export const tokens = {
  fonts: {
    pixel: "'Pixelify Sans', 'Courier New', monospace", // headings, nav, buttons, labels
    serif: "'Newsreader', 'Iowan Old Style', Georgia, serif", // prose
    ui: "'IBM Plex Sans', system-ui, -apple-system, 'Segoe UI', sans-serif", // small descriptive text
    mono: "'IBM Plex Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace", // data
    sans: "'Pixelify Sans', 'Courier New', monospace", // legacy alias (used for headings)
  },
  space: (n) => `${n * 4}px`,
  animation: {
    fast: '90ms',
    normal: '160ms',
    slow: '320ms',
    easing: 'steps(3, end)', // chunky, frame-by-frame feel
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
};
