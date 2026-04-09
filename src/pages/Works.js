import React, { useEffect } from 'react';
import Projects from '../components/sections/Projects';
import { setDocTitle } from '../utils/helpers';

const Works = () => {
  useEffect(() => setDocTitle('works'), []);
  return <Projects />;
};

Works.displayName = 'WorksPage';
export default Works;
