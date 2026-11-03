import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';

const Skip = styled.a`
  position: absolute;
  left: 16px;
  top: -60px;
  z-index: 200;
  padding: 10px 14px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.bgSecondary};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 14px;
  border-radius: 0;
  &:focus { top: 12px; }
`;

const Main = styled.main`
  width: 95%;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space(10)} 0 ${({ theme }) => theme.space(16)};
  min-height: 70vh;
  outline: none;
  @media (max-width: 600px) {
    padding-top: ${({ theme }) => theme.space(6)};
  }
`;

const Layout = ({ children }) => (
  <>
    <Skip href="#main">Skip to content</Skip>
    <NavBar />
    <Main id="main" tabIndex={-1}>
      {children}
    </Main>
    <Footer />
  </>
);

Layout.displayName = 'Layout';
export default Layout;
