import React, { useEffect } from 'react';
import Comparison from '../components/sections/Comparison';
import { setDocTitle } from '../utils/helpers';

const Blog = () => {
  useEffect(() => setDocTitle('comparision'), []);
  return <Comparison />;
};

Blog.displayName = 'BlogPage';
export default Blog;
