import React, { createContext, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const ThemeContext = createContext(theme);

export const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={theme}>
    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
  </ThemeContext.Provider>
);

export const useTheme = () => useContext(ThemeContext);
