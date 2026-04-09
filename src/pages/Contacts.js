import React, { useEffect } from 'react';
import Contact from '../components/sections/Contact';
import { setDocTitle } from '../utils/helpers';

const Contacts = () => {
  useEffect(() => setDocTitle('contacts'), []);
  return <Contact />;
};

Contacts.displayName = 'ContactsPage';
export default Contacts;
