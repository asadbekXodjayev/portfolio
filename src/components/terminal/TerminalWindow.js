import React from 'react';
import styled, { css } from 'styled-components';
import CursorBlink from './CursorBlink';

const variantColor = {
  'phosphor-green': (t) => t.colors.primary,
  cyan: (t) => t.colors.secondary,
  amber: (t) => t.colors.warning,
};

const Shell = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme, $variant }) => (variantColor[$variant] || variantColor['phosphor-green'])(theme)};
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4),
    0 0 40px
      ${({ theme, $variant, $glow }) =>
        $glow
          ? `${(variantColor[$variant] || variantColor['phosphor-green'])(theme)}22`
          : 'transparent'};
  font-family: ${({ theme }) => theme.fonts.mono};
  width: 100%;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.surface};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  user-select: none;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${({ $color }) => $color};
  display: inline-block;
`;

const Title = styled.span`
  margin-left: 8px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.textMuted};
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  position: relative;
  padding: ${({ theme }) => theme.space(4)};
  color: ${({ theme, $variant }) => (variantColor[$variant] || variantColor['phosphor-green'])(theme)};
  min-height: 60px;
  ${({ $scanlines }) =>
    $scanlines &&
    css`
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: repeating-linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.15) 0px,
          rgba(0, 0, 0, 0.15) 1px,
          transparent 1px,
          transparent 3px
        );
      }
    `}
`;

const TerminalWindow = ({
  title = 'bash',
  children,
  variant = 'phosphor-green',
  glow = true,
  scanlines = true,
  showCursor = true,
  ...rest
}) => (
  <Shell $variant={variant} $glow={glow} {...rest}>
    <TitleBar>
      <Dot $color="#ff5f57" />
      <Dot $color="#febc2e" />
      <Dot $color="#28c840" />
      <Title>
        {title} {showCursor && <CursorBlink />}
      </Title>
    </TitleBar>
    <Body $variant={variant} $scanlines={scanlines}>
      {children}
    </Body>
  </Shell>
);

TerminalWindow.displayName = 'TerminalWindow';
export default TerminalWindow;
