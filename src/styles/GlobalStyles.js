import { createGlobalStyle } from 'styled-components';
import { pixelGrid } from './pixel';

const GlobalStyles = createGlobalStyle`
  /* Pixelify Sans' "fi"/"fl" ligatures render as broken glyphs — keep letters separate. */
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; border-radius: 0; font-variant-ligatures: none; font-feature-settings: 'liga' 0, 'clig' 0; }
  html { -webkit-text-size-adjust: 100%; }
  /* Lenis smooth-scroll (required rules) */
  html.lenis, html.lenis body { height: auto; }
  .lenis.lenis-smooth { scroll-behavior: auto !important; }
  .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
  .lenis.lenis-stopped { overflow: hidden; }
  .lenis.lenis-scrolling iframe { pointer-events: none; }
  body {
    ${pixelGrid}
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.serif};
    font-size: 17px;
    line-height: 1.65;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
  }
  p { max-width: 68ch; }
  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-underline-offset: 3px;
    text-decoration-color: color-mix(in srgb, currentColor 35%, transparent);
  }
  a:hover { text-decoration-color: currentColor; }
  button, input, textarea, select {
    font-family: ${({ theme }) => theme.fonts.ui};
    color: inherit;
    background: transparent;
    border: 2px solid ${({ theme }) => theme.colors.ink};
  }
  button { cursor: pointer; }
  img { max-width: 100%; display: block; }
  svg { image-rendering: pixelated; }
  h1, h2, h3, h4 {
    font-family: ${({ theme }) => theme.fonts.pixel};
    font-weight: 600;
    line-height: 1.15;
    letter-spacing: 0;
    text-wrap: balance;
  }

  :focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 3px;
  }

  ::-webkit-scrollbar { width: 14px; height: 14px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.surface}; border-left: 2px solid ${({ theme }) => theme.colors.ink}; }
  ::-webkit-scrollbar-thumb { background: ${({ theme }) => theme.colors.primary}; border: 2px solid ${({ theme }) => theme.colors.ink}; }
  ::-webkit-scrollbar-thumb:hover { background: ${({ theme }) => theme.colors.accent}; }

  ::selection { background: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.accentInk}; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
