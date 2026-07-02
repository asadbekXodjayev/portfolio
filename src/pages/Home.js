import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BootSequence from '../components/terminal/BootSequence';
import Hero from '../components/sections/Hero';
import TerminalInput from '../components/terminal/TerminalInput';
import PreviewAbout from '../components/home/PreviewAbout';
import PreviewWorks from '../components/home/PreviewWorks';
import PreviewSkills from '../components/home/PreviewSkills';
import PreviewAI from '../components/home/PreviewAI';
import PreviewContact from '../components/home/PreviewContact';
import { setDocTitle } from '../utils/helpers';

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.space(8)};
`;

const Home = () => {
  const [booted, setBooted] = useState(() => sessionStorage.getItem('booted') === '1');

  useEffect(() => {
    setDocTitle('home');
  }, []);

  const onDone = () => {
    sessionStorage.setItem('booted', '1');
    setBooted(true);
  };

  return (
    <>
      {!booted && <BootSequence onDone={onDone} />}
      <Stack>
        <Hero />
        <PreviewAbout />
        <PreviewWorks />
        <PreviewSkills />
        <PreviewAI />
        <TerminalInput />
        <PreviewContact />
      </Stack>
    </>
  );
};

Home.displayName = 'HomePage';
export default Home;
