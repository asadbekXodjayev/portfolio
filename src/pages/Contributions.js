import React, { useEffect } from 'react';
import PageHeader from '../components/ui/PageHeader';
import Contributions from '../components/sections/Contributions';
import { setDocTitle } from '../utils/helpers';

const ContributionsPage = () => {
  useEffect(() => setDocTitle('contributions'), []);
  return (
    <>
      <PageHeader
        title="Open-source contributions"
        lede="Pull requests I have authored to NVIDIA projects, each linked to the original review so you can verify it."
      />
      <Contributions />
    </>
  );
};

ContributionsPage.displayName = 'ContributionsPage';
export default ContributionsPage;
