import React from 'react';
import styled from 'styled-components';
import Scramble from './Scramble';

const Wrap = styled.header`
  margin-bottom: ${({ theme }) => theme.space(10)};
  padding-bottom: ${({ theme }) => theme.space(6)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
  display: grid;
  gap: ${({ theme }) => theme.space(3)};
  h1 {
    font-size: clamp(34px, 5vw, 56px);
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 16px;
    &::before {
      content: '';
      width: clamp(18px, 2.4vw, 26px);
      height: clamp(18px, 2.4vw, 26px);
      background: ${({ theme }) => theme.colors.accent};
      border: 2px solid ${({ theme }) => theme.colors.ink};
      box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.shadow};
      flex: none;
    }
  }
  p {
    font-size: 19px;
    color: ${({ theme }) => theme.colors.textMuted};
    max-width: 60ch;
  }
`;

const PageHeader = ({ title, lede }) => (
  <Wrap>
    <h1>
      <Scramble text={title} />
    </h1>
    {lede && <p>{lede}</p>}
  </Wrap>
);

PageHeader.displayName = 'PageHeader';
export default PageHeader;
