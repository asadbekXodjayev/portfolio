import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';

const Grid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.space(10)} ${({ theme }) => theme.space(8)};
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  align-items: start;
`;

const Group = styled(motion.section)`
  h2 {
    font-size: 24px;
    padding-bottom: ${({ theme }) => theme.space(2)};
    margin-bottom: ${({ theme }) => theme.space(3)};
    border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
  }
  .badge {
    display: inline-block;
    margin-left: 10px;
    padding: 1px 8px;
    border: 2px solid ${({ theme }) => theme.colors.ink};
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentInk};
    font-family: ${({ theme }) => theme.fonts.pixel};
    font-size: 14px;
    font-weight: 600;
    vertical-align: middle;
  }
  ul {
    list-style: none;
    display: grid;
    gap: 6px;
    font-family: ${({ theme }) => theme.fonts.ui};
    font-size: 15px;
  }
  li {
    padding: 4px 0;
    border-bottom: 2px dotted ${({ theme }) => theme.colors.border};
  }
`;

// "languages.sys" -> "Languages", "ai-ml.sys" -> "AI / ML"
const prettyTitle = (raw) => {
  const base = raw.replace(/\.sys$/, '');
  if (base === 'ai-ml') return 'AI / ML';
  return base
    .split(/[-_]/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
};

const Skills = () => (
  <Grid variants={containerVariants} {...inViewProps}>
    {skillGroups.map((g) => (
      <Group key={g.title} variants={itemVariants} $highlight={g.highlight}>
        <h2>
          {prettyTitle(g.title)}
          {g.badge && <span className="badge">{g.badge}</span>}
        </h2>
        <ul>
          {g.items.map((s) => (
            <li key={s.name}>{s.name}</li>
          ))}
        </ul>
      </Group>
    ))}
  </Grid>
);

Skills.displayName = 'Skills';
export default Skills;
