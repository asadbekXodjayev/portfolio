import React from 'react';
import styled, { keyframes } from 'styled-components';

const glitchA = keyframes`
  0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
  20% { clip-path: inset(10% 0 80% 0); transform: translate(-2px, 0); }
  40% { clip-path: inset(50% 0 30% 0); transform: translate(2px, 0); }
  60% { clip-path: inset(80% 0 5% 0); transform: translate(-1px, 0); }
`;
const glitchB = keyframes`
  0%, 100% { clip-path: inset(0 0 0 0); transform: translate(0); }
  20% { clip-path: inset(60% 0 20% 0); transform: translate(2px, 0); }
  40% { clip-path: inset(10% 0 70% 0); transform: translate(-2px, 0); }
  60% { clip-path: inset(30% 0 40% 0); transform: translate(1px, 0); }
`;

const Wrap = styled.span`
  position: relative;
  display: inline-block;
  color: ${({ theme }) => theme.colors.text};
  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    pointer-events: none;
  }
  &::before {
    color: ${({ theme }) => theme.colors.danger};
    animation: ${glitchA} 2.5s infinite steps(1);
    mix-blend-mode: screen;
  }
  &::after {
    color: ${({ theme }) => theme.colors.secondary};
    animation: ${glitchB} 2.5s infinite steps(1);
    mix-blend-mode: screen;
  }
`;

const GlitchText = ({ children, as = 'span', ...rest }) => (
  <Wrap as={as} data-text={children} {...rest}>
    {children}
  </Wrap>
);

GlitchText.displayName = 'GlitchText';
export default GlitchText;
