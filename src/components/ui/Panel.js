import React from 'react';
import styled from 'styled-components';
import { pixelBox } from '../../styles/pixel';

// A pixel "window": navy title bar with an amber square, hard border and shadow.
// Legacy props from the old terminal window (variant, glow, …) are ignored.

const Sheet = styled.section`
  ${pixelBox(6)}
  background: ${({ theme }) => theme.colors.bgSecondary};
  width: 100%;
`;

const Caption = styled.header`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: ${({ theme }) => theme.colors.ink};
  color: ${({ theme }) => theme.colors.bgSecondary};
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 16px;
  font-weight: 600;
  &::before {
    content: '';
    width: 10px;
    height: 10px;
    background: ${({ theme }) => theme.colors.bgSecondary};
    flex: none;
  }
`;

const Body = styled.div`
  padding: ${({ theme }) => theme.space(5)};
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 15px;
  line-height: 1.6;
`;

const Panel = ({ title, children, variant, glow, scanlines, showCursor, ...rest }) => (
  <Sheet {...rest}>
    {title && <Caption>{title}</Caption>}
    <Body>{children}</Body>
  </Sheet>
);

Panel.displayName = 'Panel';
export default Panel;
