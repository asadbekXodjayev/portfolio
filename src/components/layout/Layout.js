import React from 'react';
import styled from 'styled-components';
import NavBar from './NavBar';
import Footer from './Footer';
import ScanlineOverlay from '../ui/ScanlineOverlay';

const Main = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.space(8)} ${({ theme }) => theme.space(4)};
  min-height: 70vh;
`;

const Layout = ({ children }) => (
  <>
    <ScanlineOverlay />
    <NavBar />
    <Main>{children}</Main>
    <Footer />
  </>
);

Layout.displayName = 'Layout';
export default Layout;
