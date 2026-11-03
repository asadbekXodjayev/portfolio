import React, { useEffect } from 'react';
import AboutSection from '../components/sections/About';
import PageHeader from '../components/ui/PageHeader';
import { setDocTitle } from '../utils/helpers';

const About = () => {
  useEffect(() => setDocTitle('about'), []);
  return (
    <>
      <PageHeader title="About" lede="Background, what I am studying in AI, and where I am heading." />
      <AboutSection />
    </>
  );
};

About.displayName = 'AboutPage';
export default About;
