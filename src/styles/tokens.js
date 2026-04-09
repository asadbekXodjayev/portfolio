export const tokens = {
  colors: {
    bg: '#0a0a0a',
    bgSecondary: '#111111',
    surface: '#1a1a1a',
    border: '#2a2a2a',
    primary: '#00ff88',
    secondary: '#00ccff',
    warning: '#ffaa00',
    danger: '#ff3366',
    text: '#e0e0e0',
    textMuted: '#666666',
    textDim: '#333333',
  },
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
    sans: "'Inter', system-ui, sans-serif",
  },
  space: (n) => `${n * 4}px`,
  animation: {
    fast: '150ms',
    normal: '300ms',
    slow: '600ms',
    easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
  },
};
