import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { config, interests } from '../../data/config';
import { bioLines, timeline } from '../../data/about';
import { aiStudies, aiGoals } from '../../data/ai';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(16)};
`;

const Block = styled.section`
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: ${({ theme }) => theme.space(8)};
  @media (max-width: 800px) { grid-template-columns: 1fr; gap: ${({ theme }) => theme.space(4)}; }
`;

const Label = styled.h2`
  font-size: 24px;
  position: sticky;
  top: 84px;
  align-self: start;
  @media (max-width: 800px) { position: static; }
`;

const Prose = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space(4)};
  p { font-size: 19px; line-height: 1.65; }
  strong { font-weight: 600; }
  em { font-style: italic; }
  a { text-underline-offset: 3px; }
`;

const Facts = styled.dl`
  display: grid;
  grid-template-columns: 110px 1fr;
  gap: 8px 16px;
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 15px;
  padding-bottom: ${({ theme }) => theme.space(5)};
  border-bottom: 2px dotted ${({ theme }) => theme.colors.border};
  dt { color: ${({ theme }) => theme.colors.textMuted}; }
`;

const Dl = styled.dl`
  display: grid;
  gap: ${({ theme }) => theme.space(4)};
  dt { font-family: ${({ theme }) => theme.fonts.ui}; font-weight: 600; font-size: 16px; }
  dd { font-size: 17px; color: ${({ theme }) => theme.colors.textMuted}; margin-top: 2px; }
`;

const Timeline = styled(motion.ol)`
  list-style: none;
  display: grid;
  gap: ${({ theme }) => theme.space(6)};
`;

const Entry = styled(motion.li)`
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: ${({ theme }) => theme.space(4)};
  @media (max-width: 560px) { grid-template-columns: 1fr; gap: 2px; }
  time { font-family: ${({ theme }) => theme.fonts.mono}; font-size: 13px; color: ${({ theme }) => theme.colors.textMuted}; padding-top: 5px; }
  h3 { font-size: 20px; margin-bottom: 4px; }
  p { font-size: 17px; color: ${({ theme }) => theme.colors.textMuted}; }
`;

const InterestRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Chip = styled.button`
  padding: 5px 12px;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 16px;
  border: 2px solid ${({ theme }) => theme.colors.ink};
  color: ${({ theme, $active }) => ($active ? theme.colors.accentInk : theme.colors.text)};
  background: ${({ theme, $active }) => ($active ? theme.colors.accent : theme.colors.bgSecondary)};
  box-shadow: ${({ $active }) => ($active ? 'none' : '3px 3px 0')} ${({ theme }) => theme.colors.shadow};
  transform: ${({ $active }) => ($active ? 'translate(3px, 3px)' : 'none')};
  &:hover { background: ${({ theme }) => theme.colors.accent}; color: ${({ theme }) => theme.colors.accentInk}; }
`;

const Desc = styled.p`
  margin-top: 14px;
  padding-left: 14px;
  border-left: 4px solid ${({ theme }) => theme.colors.accent};
  font-size: 17px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const facts = bioLines.filter((b) => /^<strong>[a-z]+:<\/strong>/i.test(b.t));
const paragraphs = bioLines.filter((b) => !/^<strong>[a-z]+:<\/strong>/i.test(b.t));

const parseFact = (html) => {
  const m = html.match(/^<strong>([^<]+):<\/strong>\s*(.*)$/i);
  return m ? { k: m[1], v: m[2].replace(/&amp;/g, '&') } : { k: '', v: html };
};

const About = () => {
  const [active, setActive] = useState('');
  const current = interests.find((i) => i.name === active);

  return (
    <Stack>
      <Block>
        <Label>Background</Label>
        <Prose>
          <Facts>
            {facts
              .map((f) => parseFact(f.t))
              .filter((f) => !/^(user|email)$/i.test(f.k))
              .map((f) => (
                <React.Fragment key={f.k}>
                  <dt>{f.k[0].toUpperCase() + f.k.slice(1)}</dt>
                  <dd>{f.v}</dd>
                </React.Fragment>
              ))}
            <dt>Email</dt>
            <dd>
              <a href={`mailto:${config.academicEmail}`}>{config.academicEmail}</a>
            </dd>
          </Facts>
          {paragraphs.map((b, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: b.t }} />
          ))}
        </Prose>
      </Block>

      <Block>
        <Label>AI: studies and goals</Label>
        <Prose>
          <p>
            AI is where my work is heading. I am studying how models are built and run, and I want
            to contribute to the infrastructure and security around them. The longer version is in{' '}
            <Link to="/blog/future-goals">my goals post</Link>.
          </p>
          <Dl>
            {aiStudies.map((s) => (
              <div key={s.name}>
                <dt>{s.name}</dt>
                <dd>{s.note}</dd>
              </div>
            ))}
          </Dl>
          <h3 style={{ fontSize: 20, marginTop: 8 }}>Goals</h3>
          <Dl>
            {aiGoals.map((g) => (
              <div key={g.title}>
                <dt>{g.title}</dt>
                <dd>{g.body}</dd>
              </div>
            ))}
          </Dl>
        </Prose>
      </Block>

      <Block>
        <Label>Timeline</Label>
        <Timeline variants={containerVariants} {...inViewProps}>
          {timeline.map((t) => (
            <Entry key={t.year} variants={itemVariants}>
              <time>{t.year}</time>
              <div>
                <h3>{t.title}</h3>
                <p>{t.body}</p>
              </div>
            </Entry>
          ))}
        </Timeline>
      </Block>

      <Block>
        <Label>Outside work</Label>
        <div>
          <InterestRow>
            {interests.map((i) => (
              <Chip
                key={i.name}
                type="button"
                $active={i.name === active}
                aria-pressed={i.name === active}
                onClick={() => setActive(i.name === active ? '' : i.name)}
              >
                {i.name}
              </Chip>
            ))}
          </InterestRow>
          {current && <Desc>{current.desc}</Desc>}
        </div>
      </Block>
    </Stack>
  );
};

About.displayName = 'About';
export default About;
