import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import TerminalWindow from '../components/terminal/TerminalWindow';
import { setDocTitle } from '../utils/helpers';

const Msg = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 14px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  em { color: ${({ theme }) => theme.colors.danger}; font-style: normal; }
  a { color: ${({ theme }) => theme.colors.primary}; }
`;

const NotFound = () => {
  const loc = useLocation();
  useEffect(() => setDocTitle('404'), []);
  return (
    <TerminalWindow title="bash: error" variant="cyan">
      <Msg>
        <div>
          guest@asad:~$ <em>{loc.pathname.replace('/', '')}</em>
        </div>
        <div>bash: {loc.pathname}: command not found</div>
        <div>&nbsp;</div>
        <div>
          did you mean: <Link to="/">~/home</Link> · <Link to="/works">~/works</Link> ·{' '}
          <Link to="/about">~/about</Link>?
        </div>
      </Msg>
    </TerminalWindow>
  );
};

NotFound.displayName = 'NotFoundPage';
export default NotFound;
