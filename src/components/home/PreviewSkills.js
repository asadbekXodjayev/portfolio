import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { topSkills } from '../../data/skills';
import { fastContainerVariants, fadeInVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Eyebrow, MoreLink } from './previewStyles';

const Cloud = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled(motion.span)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.text};
  cursor: default;
  transition: all ${({ theme }) => theme.animation.fast};
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 16px ${({ theme }) => theme.colors.primary}33;
  }
`;

const PreviewSkills = () => (
  <Section variants={fastContainerVariants} {...inViewProps}>
    <Eyebrow variants={fadeInVariants}>
      <span>$</span> echo $SKILLS | head
    </Eyebrow>
    <Cloud variants={fastContainerVariants}>
      {topSkills.map((s) => (
        <Tag key={s} variants={itemVariants}>
          {s}
        </Tag>
      ))}
    </Cloud>
    <MoreLink to="/skills">see full skill set →</MoreLink>
  </Section>
);

PreviewSkills.displayName = 'PreviewSkills';
export default PreviewSkills;
