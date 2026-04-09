import React from 'react';
import styled from 'styled-components';
import TerminalWindow from '../terminal/TerminalWindow';
import { skillGroups } from '../../data/skills';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space(6)};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 140px 1fr 44px;
  gap: 10px;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  padding: 4px 0;
  @media (max-width: 480px) {
    grid-template-columns: 100px 1fr 44px;
  }
`;

const Name = styled.span`
  color: ${({ theme }) => theme.colors.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
      <Name>{skill.name}</Name>
      <BarWrap>{makeBar(skill.level, progress)}</BarWrap>
      <Pct>{Math.round(skill.level * progress)}%</Pct>
    </Row>
  );
};

const Skills = () => (
  <Grid>
    {skillGroups.map((g) => (
      <TerminalWindow key={g.title} title={`~/${g.title}`} variant="cyan">
        {g.items.map((s) => (
          <SkillRow key={s.name} skill={s} />
        ))}
      </TerminalWindow>
    ))}
  </Grid>
);

Skills.displayName = 'Skills';
export default Skills;
