import React, { useEffect } from 'react';
import styled from 'styled-components';
import AsciiRoom from '../components/sections/AsciiRoom';
import { setDocTitle } from '../utils/helpers';

// The nav is 64px tall (62px plus its 2px border). The page block cancels the
// <main> padding and takes exactly the rest of the viewport, so nav + room = 100vh.
const Fit = styled.div`
  margin: -${({ theme }) => theme.space(10)} 0 -${({ theme }) => theme.space(16)};
  height: calc(100vh - 64px);
  height: calc(100dvh - 64px);
  padding: 12px 0;
  @media (max-width: 900px) {
    margin-top: -${({ theme }) => theme.space(6)};
    height: auto;
    padding: 12px 0 24px;
  }
`;

// Hidden page: reachable from the footer heart or the Konami code. Kept out of the nav and
// marked noindex while it is mounted.
const Ascii = () => {
  useEffect(() => {
    setDocTitle('secret ascii room');
    const meta = document.createElement('meta');
    meta.name = 'robots';
    meta.content = 'noindex, nofollow';
    document.head.appendChild(meta);
    return () => meta.remove();
  }, []);

  return (
    <Fit>
      <h1 style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Secret ASCII room</h1>
      <AsciiRoom />
    </Fit>
  );
};

Ascii.displayName = 'AsciiPage';
export default Ascii;
