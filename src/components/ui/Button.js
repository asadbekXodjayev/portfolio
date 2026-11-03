import styled from 'styled-components';
import { pixelBox, pixelPress } from '../../styles/pixel';

// Filled blue by default; $ghost = outlined. Hover turns amber (the contrast color) and
// lifts; pressing pushes the button into its shadow.
const Button = styled.button`
  ${pixelBox(4)}
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  min-height: 44px;
  background: ${({ theme, $ghost }) => ($ghost ? theme.colors.bgSecondary : theme.colors.primary)};
  color: ${({ theme, $ghost }) => ($ghost ? theme.colors.text : theme.colors.bgSecondary)};
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  ${pixelPress}

  &:hover {
    background: ${({ theme, $ghost }) => ($ghost ? theme.colors.accent : theme.colors.bg)};
    color: ${({ theme, $ghost }) => ($ghost ? theme.colors.accentInk : theme.colors.text)};
  }
  &:disabled { opacity: 0.5; cursor: not-allowed; transform: none; box-shadow: 4px 4px 0 ${({ theme }) => theme.colors.shadow}; }
`;

Button.displayName = 'Button';
export default Button;
