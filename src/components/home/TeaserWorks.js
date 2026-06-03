import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { featuredProjects } from '../../data/projects';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Eyebrow, MoreLink } from './teaser.styles';

const Head = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space(4)};
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
`;

// Featured cards normally span 2 cols; in the teaser we want 3 equal cards.
const TeaserWorks = () => (
  <Section variants={containerVariants} {...inViewProps}>
    <Head>
      <Eyebrow variants={itemVariants}>
        <span>$</span> ls ~/works --featured
      </Eyebrow>
      <MoreLink to="/works">view all projects →</MoreLink>
    </Head>
    <Grid>
      {featuredProjects.map((p) => (
        <motion.div key={p.id} variants={itemVariants}>
          <ProjectCard project={{ ...p, featured: false }} />
        </motion.div>
      ))}
    </Grid>
  </Section>
);

TeaserWorks.displayName = 'TeaserWorks';
export default TeaserWorks;
