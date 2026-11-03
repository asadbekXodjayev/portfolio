import styled from 'styled-components';

const Badge = styled.span`
  display: inline-block;
  padding: 1px 8px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  font-size: 12px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textMuted};
  background: ${({ theme }) => theme.colors.bgSecondary};
  font-family: ${({ theme }) => theme.fonts.mono};
`;

Badge.displayName = 'Badge';
export default Badge;
