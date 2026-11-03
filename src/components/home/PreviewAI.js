import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { aiStudies, aiGoals, aiBuilt } from '../../data/ai';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Head, Heading, Lede, MoreLink } from './previewStyles';

const Cols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.space(10)};
  @media (max-width: 860px) { grid-template-columns: 1fr; gap: ${({ theme }) => theme.space(8)}; }
`;

const Col = styled(motion.div)`
  h3 { font-size: 20px; margin-bottom: ${({ theme }) => theme.space(3)}; }
`;

const Dl = styled.dl`
  display: grid;
  gap: ${({ theme }) => theme.space(3)};
  dt { font-family: ${({ theme }) => theme.fonts.ui}; font-weight: 600; font-size: 15px; }
  dd { color: ${({ theme }) => theme.colors.textMuted}; font-size: 16px; margin-top: 2px; }
`;

const Built = styled.p`
  margin-top: ${({ theme }) => theme.space(5)};
  font-family: ${({ theme }) => theme.fonts.ui};
  font-size: 14px;
  color: ${({ theme }) => theme.colors.textMuted};
`;

const PreviewAI = () => (
  <Section variants={containerVariants} {...inViewProps}>
    <Head>
      <Heading variants={itemVariants}>AI: what I study and where I am going</Heading>
      <MoreLink to="/blog/future-goals">Read the full goals post</MoreLink>
    </Head>
    <Lede>
      AI is the direction my work is moving in. I am learning how models are built and run, and I
      want to contribute to the infrastructure and security around them.
    </Lede>
    <Cols>
      <Col variants={itemVariants}>
        <h3>Currently studying</h3>
        <Dl>
          {aiStudies.map((s) => (
            <div key={s.name}>
              <dt>{s.name}</dt>
              <dd>{s.note}</dd>
            </div>
          ))}
        </Dl>
        <Built>
          Built so far: {aiBuilt.join(', ')}. <Link to="/works">See the projects</Link>.
        </Built>
      </Col>
      <Col variants={itemVariants}>
        <h3>Goals</h3>
        <Dl>
          {aiGoals.map((g) => (
            <div key={g.title}>
              <dt>{g.title}</dt>
              <dd>{g.body}</dd>
            </div>
          ))}
        </Dl>
      </Col>
    </Cols>
  </Section>
);

PreviewAI.displayName = 'PreviewAI';
export default PreviewAI;
