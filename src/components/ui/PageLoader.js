import React from 'react';
import TerminalWindow from '../terminal/TerminalWindow';

const PageLoader = () => (
  <TerminalWindow title="loading..." variant="cyan">
    <div>$ loading module...</div>
  </TerminalWindow>
);

PageLoader.displayName = 'PageLoader';
export default PageLoader;
