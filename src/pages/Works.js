import React, { useEffect } from 'react';
import Projects from '../components/sections/Projects';
import PageHeader from '../components/ui/PageHeader';
import { setDocTitle } from '../utils/helpers';

const Works = () => {
  useEffect(() => setDocTitle('works'), []);
  return (
    <>
      <PageHeader title="Projects" lede="Web, AI/ML and native applications, with source and live links where available." />
      <Projects />
    </>
  );
};

Works.displayName = 'WorksPage';
export default Works;
