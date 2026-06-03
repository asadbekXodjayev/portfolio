import React, { useEffect } from 'react';
import Blog from '../components/sections/Blog';
import { setDocTitle } from '../utils/helpers';

const BlogPage = () => {
  useEffect(() => setDocTitle('blog'), []);
  return <Blog />;
};

BlogPage.displayName = 'BlogPage';
export default BlogPage;
