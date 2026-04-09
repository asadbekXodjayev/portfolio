import React, { useEffect } from 'react';
import AboutSection from '../components/sections/About';
import { setDocTitle } from '../utils/helpers';

const About = () => {
  useEffect(() => setDocTitle('about'), []);
  return <AboutSection />;
};

About.displayName = 'AboutPage';
export default About;
