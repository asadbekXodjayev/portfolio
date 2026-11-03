import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import PageLoader from './components/ui/PageLoader';
import Bot from "./hooks/bot";
import SmoothScroll from './components/layout/SmoothScroll';
import PageTransition from './components/layout/PageTransition';
import SecretKeys from './components/layout/SecretKeys';
import PixelCursor from './components/ui/PixelCursor';
import BackToTop from './components/ui/BackToTop';

const Home = lazy(() => import('./pages/Home'));
const Works = lazy(() => import('./pages/Works'));
const Skills = lazy(() => import('./pages/Skills'));
const About = lazy(() => import('./pages/About'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Contributions = lazy(() => import('./pages/Contributions'));
const Ascii = lazy(() => import('./pages/Ascii'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const NotFound = lazy(() => import('./pages/NotFound'));
import { Analytics } from '@vercel/analytics/react';
const App = () => (
  <ThemeProvider>
    <MotionConfig reducedMotion="user">
      <Bot />
      <Analytics />
      <GlobalStyles />
      <ScrollToTop />
      <SmoothScroll />
      <PageTransition />
      <PixelCursor />
      <SecretKeys />
      <BackToTop />
      <Layout>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/works" element={<Works />} />
            <Route path="/about" element={<About />} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/ascii" element={<Ascii />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </MotionConfig>
  </ThemeProvider>
);

App.displayName = 'App';
export default App;
