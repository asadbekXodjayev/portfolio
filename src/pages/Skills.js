import React, { useEffect } from 'react';
import SkillsSection from '../components/sections/Skills';
import { setDocTitle } from '../utils/helpers';

const Skills = () => {
  useEffect(() => setDocTitle('skills'), []);
  return <SkillsSection />;
};

Skills.displayName = 'SkillsPage';
export default Skills;
