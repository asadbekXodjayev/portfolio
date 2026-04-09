import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.mono};
    font-size: 14px;
    line-height: 1.6;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  a { color: ${({ theme }) => theme.colors.primary}; text-decoration: none; }
  a:hover { color: ${({ theme }) => theme.colors.secondary}; }
  button, input, textarea, select {
    font-family: inherit;
    color: inherit;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.border};
  }
  button { cursor: pointer; }
  img { max-width: 100%; display: block; }
  h1, h2, h3, h4 { font-family: ${({ theme }) => theme.fonts.sans}; font-weight: 700; }

  ::-webkit-scrollbar { width: 8px; height: 8px; }
  ::-webkit-scrollbar-track { background: ${({ theme }) => theme.colors.bg}; }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    opacity: 0.5;
  }
  ::-webkit-scrollbar-thumb:hover { background: ${({ theme }) => theme.colors.secondary}; }

  ::selection { background: ${({ theme }) => theme.colors.primary}; color: ${({ theme }) => theme.colors.bg}; }

  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      transition-duration: 0.01ms !important;
    }
  }
`;

export default GlobalStyles;
