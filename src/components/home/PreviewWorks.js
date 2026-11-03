import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { featuredProjects } from '../../data/projects';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Head, Heading, MoreLink } from './previewStyles';

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.space(5)};
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const PreviewWorks = () => (
  <Section variants={containerVariants} {...inViewProps}>
    <Head>
      <Heading variants={itemVariants}>Selected projects</Heading>
      <MoreLink to="/works">All projects</MoreLink>
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

PreviewWorks.displayName = 'PreviewWorks';
export default PreviewWorks;
