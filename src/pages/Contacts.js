import React, { useEffect } from 'react';
import Contact from '../components/sections/Contact';
import PageHeader from '../components/ui/PageHeader';
import { setDocTitle } from '../utils/helpers';

const Contacts = () => {
  useEffect(() => setDocTitle('contacts'), []);
  return (
    <>
      <PageHeader title="Contact" lede="For research, collaboration or roles. Email is the fastest way to reach me." />
      <Contact />
    </>
  );
};

Contacts.displayName = 'ContactsPage';
export default Contacts;
