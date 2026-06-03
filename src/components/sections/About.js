import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import TerminalWindow from '../terminal/TerminalWindow';
import { config, interests } from '../../data/config';
import { bioLines, timeline, currentlyExploring } from '../../data/about';
import { asciiPortrait } from '../../utils/ascii';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(8)};
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space(6)};
  grid-template-columns: 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1.4fr;
  }
`;

const Ascii = styled.pre`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 10px;
  line-height: 1.1;
  text-align: center;
`;

const Line = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.text};
  margin: 4px 0;
  line-height: 1.55;
  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
  em {
    color: ${({ theme }) => theme.colors.secondary};
    font-style: normal;
  }
`;

const InterestGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: ${({ theme }) => theme.space(4)};
`;

const Chip = styled.button`
  border: 1px solid ${({ theme, $active }) => ($active ? theme.colors.primary : theme.colors.border)};
  color: ${({ theme, $active }) => ($active ? theme.colors.bg : theme.colors.text)};
  background: ${({ theme, $active }) => ($active ? theme.colors.primary : 'transparent')};
  padding: 4px 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  cursor: pointer;
  transition: all 150ms;
  &:hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Desc = styled.div`
  margin-top: 12px;
  padding: 10px;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
  background: ${({ theme }) => theme.colors.surface};
  color: ${({ theme }) => theme.colors.text};
  font-size: 13px;
`;

const SectionTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-bottom: ${({ theme }) => theme.space(2)};
  strong {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Timeline = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(5)};
  padding-left: ${({ theme }) => theme.space(6)};
  &::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 4px;
    bottom: 4px;
    width: 1px;
    background: ${({ theme }) => theme.colors.border};
  }
`;

const Entry = styled(motion.div)`
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: -${({ theme }) => theme.space(6)};
    top: 4px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.bg};
    border: 2px solid ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 12px ${({ theme }) => theme.colors.primary}55;
  }
`;

const Year = styled.div`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 12px;
  color: ${({ theme }) => theme.colors.warning};
`;

const EntryTitle = styled.h3`
  margin: 2px 0 4px;
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
`;

const EntryBody = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
`;

const ExploreGrid = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.space(3)};
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const ExploreCard = styled(motion.div)`
  padding: ${({ theme }) => theme.space(3)} ${({ theme }) => theme.space(4)};
  border: 1px solid color-mix(in srgb, ${({ theme }) => theme.colors.secondary} 35%, transparent);
  border-radius: 6px;
  background: ${({ theme }) => theme.colors.surface};
  font-family: ${({ theme }) => theme.fonts.mono};
  strong {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 13px;
  }
  span {
    display: block;
    margin-top: 4px;
    font-size: 12px;
    color: ${({ theme }) => theme.colors.textMuted};
  }
`;

const About = () => {
  const [active, setActive] = useState('');
  const current = interests.find((i) => i.name === active);

  return (
    <Stack>
      <Grid>
        <TerminalWindow title="~/about/portrait" variant="amber">
          <Ascii>{asciiPortrait}</Ascii>
          <div style={{ marginTop: 12, fontSize: 12, color: '#999' }}>
            <div># system</div>
            <div>os:     {config.systemInfo.os}</div>
            <div>kernel: {config.systemInfo.kernel}</div>
            <div>shell:  {config.systemInfo.shell}</div>
            <div>editor: {config.systemInfo.editor}</div>
            <div>uptime: {config.systemInfo.uptime}</div>
            <div>host:   {config.systemInfo.host}</div>
          </div>
        </TerminalWindow>

        <TerminalWindow title="~/about/bio">
          <motion.div variants={containerVariants} {...inViewProps}>
            {bioLines.map((b, i) => (
              <Line key={i} as={motion.div} variants={itemVariants} dangerouslySetInnerHTML={{ __html: b.t }} />
            ))}
          </motion.div>
          <div style={{ marginTop: 16, color: '#00ccff', fontSize: 12 }}># interests</div>
          <InterestGrid>
            {interests.map((i) => (
              <Chip
                key={i.name}
                $active={i.name === active}
                onClick={() => setActive(i.name === active ? '' : i.name)}
              >
                {i.name}
              </Chip>
            ))}
          </InterestGrid>
          {current && <Desc>{current.desc}</Desc>}
        </TerminalWindow>
      </Grid>

      <div>
        <SectionTitle>
          <strong>$</strong> git log --oneline ~/journey
        </SectionTitle>
        <TerminalWindow title="~/about/timeline" variant="cyan">
          <Timeline variants={containerVariants} {...inViewProps}>
            {timeline.map((t) => (
              <Entry key={t.year} variants={itemVariants}>
                <Year>{t.year}</Year>
                <EntryTitle>{t.title}</EntryTitle>
                <EntryBody>{t.body}</EntryBody>
              </Entry>
            ))}
          </Timeline>
        </TerminalWindow>
      </div>

      <div>
        <SectionTitle>
          <strong>$</strong> watch ~/currently-exploring
        </SectionTitle>
        <ExploreGrid variants={containerVariants} {...inViewProps}>
          {currentlyExploring.map((e) => (
            <ExploreCard key={e.name} variants={itemVariants}>
              <strong>{e.name}</strong>
              <span>{e.note}</span>
            </ExploreCard>
          ))}
        </ExploreGrid>
      </div>
    </Stack>
  );
};

About.displayName = 'About';
export default About;
