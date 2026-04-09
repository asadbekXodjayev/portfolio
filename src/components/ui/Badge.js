import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  padding: 2px 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 3px;
  font-size: 11px;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

Badge.displayName = 'Badge';
export default Badge;
