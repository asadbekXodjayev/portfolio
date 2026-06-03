import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Shared building blocks for the Home teaser strips so they stay consistent.

export const Section = styled(motion.section)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(4)};
`;

export const Eyebrow = styled(motion.div)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.textMuted};
  span {
    color: ${({ theme, $accent }) => $accent || theme.colors.primary};
  }
`;

export const MoreLink = styled(Link)`
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.secondary};
  transition: gap ${({ theme }) => theme.animation.fast},
    color ${({ theme }) => theme.animation.fast};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    gap: 10px;
  }
`;
