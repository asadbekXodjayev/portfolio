import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Shared building blocks for the Home sections.

export const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(5)};
`;

export const Head = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  padding-bottom: ${({ theme }) => theme.space(3)};
  border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
`;

export const Heading = styled(motion.h2)`
  font-size: clamp(24px, 3vw, 32px);
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 12px;
  &::before {
    content: '';
    flex: none;
    width: 14px;
    height: 14px;
    background: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.ink};
  }
`;

export const Lede = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textMuted};
  max-width: 62ch;
`;

export const MoreLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 17px;
  white-space: nowrap;
`;

// Legacy export kept so nothing importing it breaks.
export const Eyebrow = Heading;
