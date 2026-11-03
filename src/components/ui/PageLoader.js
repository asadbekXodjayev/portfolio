import React from 'react';
import styled, { keyframes } from 'styled-components';

const step = keyframes`
  0%, 100% { opacity: 0.2; }
  50% { opacity: 1; }
`;

const Wrap = styled.div`
  min-height: 40vh;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 14px;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
`;

const Blocks = styled.div`
  display: flex;
  gap: 6px;
  span {
    width: 14px;
    height: 14px;
    background: ${({ theme }) => theme.colors.primary};
    border: 2px solid ${({ theme }) => theme.colors.ink};
    animation: ${step} 1.2s steps(2) infinite;
  }
  span:nth-child(2) { animation-delay: 0.2s; background: ${({ theme }) => theme.colors.textDim}; }
  span:nth-child(3) { animation-delay: 0.4s; }
`;

const PageLoader = () => (
  <Wrap role="status" aria-live="polite">
    <Blocks aria-hidden="true">
      <span />
      <span />
      <span />
    </Blocks>
    Loading
  </Wrap>
);

PageLoader.displayName = 'PageLoader';
export default PageLoader;
