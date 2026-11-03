import React, { useEffect } from 'react';
import SkillsSection from '../components/sections/Skills';
import PageHeader from '../components/ui/PageHeader';
import { setDocTitle } from '../utils/helpers';

const Skills = () => {
  useEffect(() => setDocTitle('skills'), []);
  return (
    <>
      <PageHeader title="Skills" lede="Languages, frameworks and tools I work with, grouped by area." />
      <SkillsSection />
    </>
  );
};

Skills.displayName = 'SkillsPage';
export default Skills;
