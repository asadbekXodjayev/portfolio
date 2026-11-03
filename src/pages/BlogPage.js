import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Blog, { PostView } from '../components/sections/Blog';
import PageHeader from '../components/ui/PageHeader';
import posts from '../data/blog.json';
import { setDocTitle } from '../utils/helpers';

const BlogPage = () => {
  const { id } = useParams();
  const post = id ? posts.find((p) => p.id === id) : null;

  useEffect(() => setDocTitle(post ? post.title : 'writing'), [post]);

  if (id) return <PostView id={id} />;

  return (
    <>
      <PageHeader
        title="Writing"
        lede="Notes on my open-source work, what I am studying in AI, and where I am heading."
      />
      <Blog />
    </>
  );
};

BlogPage.displayName = 'BlogPage';
export default BlogPage;
