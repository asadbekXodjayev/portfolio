import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  text-transform: lowercase;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animation.fast} ${({ theme }) => theme.animation.easing};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.bg};
    box-shadow: 0 0 20px ${({ theme }) => theme.colors.primary}55;
  }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

Button.displayName = 'Button';
export default Button;
