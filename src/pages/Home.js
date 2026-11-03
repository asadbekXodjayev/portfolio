import React, { useEffect } from 'react';
import styled from 'styled-components';
import Hero from '../components/sections/Hero';
import PreviewAI from '../components/home/PreviewAI';
import PreviewAbout from '../components/home/PreviewAbout';
import PreviewWorks from '../components/home/PreviewWorks';
import PreviewSkills from '../components/home/PreviewSkills';
import PreviewContact from '../components/home/PreviewContact';
import Marquee from '../components/ui/Marquee';
import { setDocTitle } from '../utils/helpers';

const TICKER = ['NVIDIA', 'Megatron-LM', 'SkillSpector', 'TensorRT-LLM', 'PyTorch', 'Open source', 'AI systems', 'Agent security'];

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(20)};
`;

const Home = () => {
  useEffect(() => {
    setDocTitle('home');
  }, []);

  return (
    <Stack>
      <Hero />
      <Marquee items={TICKER} />
      <PreviewAI />
      <PreviewWorks />
      <PreviewAbout />
      <PreviewSkills />
      <PreviewContact />
    </Stack>
  );
};

Home.displayName = 'HomePage';
export default Home;
