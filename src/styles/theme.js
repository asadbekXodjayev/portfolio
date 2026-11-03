import { tokens, lightColors, darkColors } from './tokens';

export const makeTheme = (mode) => ({
  ...tokens,
  mode,
  colors: mode === 'dark' ? darkColors : lightColors,
});

export const theme = makeTheme('light');
export default theme;
