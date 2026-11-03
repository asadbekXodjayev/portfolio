import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { topSkills } from '../../data/skills';
import { fastContainerVariants, fadeInVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Head, Heading, MoreLink } from './previewStyles';

const Cloud = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  list-style: none;
`;

const Tag = styled(motion.li)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  padding: 6px 12px;
  border: 2px solid ${({ theme }) => theme.colors.ink};
  box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.shadow};
  background: ${({ theme }) => theme.colors.bgSecondary};
  color: ${({ theme }) => theme.colors.text};
`;

const PreviewSkills = () => (
  <Section variants={fastContainerVariants} {...inViewProps}>
    <Head>
      <Heading variants={fadeInVariants}>Technical skills</Heading>
      <MoreLink to="/skills">Full list</MoreLink>
    </Head>
    <Cloud variants={fastContainerVariants}>
      {topSkills.map((s) => (
        <Tag key={s} variants={itemVariants}>
          {s}
        </Tag>
      ))}
    </Cloud>
  </Section>
);

PreviewSkills.displayName = 'PreviewSkills';
export default PreviewSkills;
