import styled, { keyframes } from 'styled-components';

const blink = keyframes`
  0%, 49% { opacity: 1; }
  50%, 100% { opacity: 0; }
`;

const CursorBlink = styled.span`
  display: inline-block;
  width: 8px;
  height: 1em;
  background: ${({ theme }) => theme.colors.primary};
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: ${blink} 1s steps(1) infinite;
`;

CursorBlink.displayName = 'CursorBlink';
export default CursorBlink;
