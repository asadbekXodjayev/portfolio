import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, inViewProps } from '../../lib/motion';
import { Section, Head, Heading, MoreLink } from './previewStyles';

const Copy = styled(motion.div)`
  display: grid;
  gap: ${({ theme }) => theme.space(4)};
  p { font-size: 19px; line-height: 1.6; }
`;

const PreviewAbout = () => (
  <Section variants={containerVariants} {...inViewProps}>
    <Head>
      <Heading variants={itemVariants}>About</Heading>
      <MoreLink to="/about">Full background</MoreLink>
    </Head>
    <Copy variants={itemVariants}>
      <p>
        I am a software developer from Uzbekistan. I started with native C++ and C# applications,
        moved to the web, and now build production software in React and TypeScript.
      </p>
      <p>
        My focus is shifting toward AI systems: how models are trained and served, and how the
        tools built around them can be made safer. My merged contributions to NVIDIA's Megatron-LM
        and SkillSpector are the first steps in that direction.
      </p>
    </Copy>
  </Section>
);

PreviewAbout.displayName = 'PreviewAbout';
export default PreviewAbout;
