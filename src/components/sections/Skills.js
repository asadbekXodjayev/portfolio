import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TerminalWindow from '../terminal/TerminalWindow';
import { skillGroups } from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { langColor } from '../../lib/github';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';

const Grid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.space(6)};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: start;
`;

// Wrapper lets the AI/ML tier sit "elevated" — tinted background + accent ring.
const GroupWrap = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  ${({ theme, $highlight }) =>
    $highlight &&
    `
    padding: ${theme.space(3)};
    background: ${theme.colors.surface};
    border: 1px solid color-mix(in srgb, ${theme.colors.secondary} 45%, transparent);
    box-shadow: 0 0 40px color-mix(in srgb, ${theme.colors.secondary} 12%, transparent);
  `}
`;

const MLBadge = styled.span`
  position: absolute;
  top: -10px;
  right: 12px;
  z-index: 2;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 3px;
  color: ${({ theme }) => theme.colors.bg};
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0 0 14px ${({ theme }) => theme.colors.secondary}66;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr 44px;
  gap: 10px;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  padding: 4px 0;
  @media (max-width: 480px) {
    grid-template-columns: 110px 1fr 44px;
  }
`;

const Name = styled.span`
  display: flex;
  align-items: center;
  gap: 7px;
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Dot = styled.span`
  width: 9px;
  height: 9px;
  flex: none;
  border-radius: 50%;
  background: ${({ $color }) => $color};
`;

const BarWrap = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 1px;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
`;

const Pct = styled.span`
  color: ${({ theme }) => theme.colors.warning};
  text-align: right;
`;

const makeBar = (level, shown) => {
  const total = 16;
  const filled = Math.round((level / 100) * total * shown);
  return '[' + '█'.repeat(filled) + '░'.repeat(total - filled) + ']';
};

const SkillRow = ({ skill }) => {
  const [ref, inView] = useScrollReveal();
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = () => {
      start += 0.05;
      setProgress(Math.min(1, start));
      if (start < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView]);

  return (
    <Row ref={ref}>
      <Name>
        {skill.colorKey && <Dot $color={langColor(skill.colorKey)} />}
        {skill.name}
      </Name>
      <BarWrap>{makeBar(skill.level, progress)}</BarWrap>
      <Pct>{Math.round(skill.level * progress)}%</Pct>
    </Row>
  );
};

const Skills = () => (
  <Grid variants={containerVariants} {...inViewProps}>
    {skillGroups.map((g) => (
      <GroupWrap key={g.title} variants={itemVariants} $highlight={g.highlight}>
        {g.badge && <MLBadge>{g.badge}</MLBadge>}
        <TerminalWindow title={`~/${g.title}`} variant={g.variant || 'phosphor-green'} glow={g.highlight}>
          {g.items.map((s) => (
            <SkillRow key={s.name} skill={s} />
          ))}
        </TerminalWindow>
      </GroupWrap>
    ))}
  </Grid>
);

Skills.displayName = 'Skills';
export default Skills;
