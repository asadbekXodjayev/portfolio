import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import PageLoader from './components/ui/PageLoader';
import Bot from "./hooks/bot";

const Home = lazy(() => import('./pages/Home'));
const Works = lazy(() => import('./pages/Works'));
const Skills = lazy(() => import('./pages/Skills'));
const About = lazy(() => import('./pages/About'));
const Contacts = lazy(() => import('./pages/Contacts'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));
import { Analytics } from '@vercel/analytics/react';
const App = () => (
  <ThemeProvider>
    <Bot />
    <Analytics />
    <GlobalStyles />
    <ScrollToTop />
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/works" element={<Works />} />
          <Route path="/about" element={<About />} />
          <Route path="/comparision" element={<Blog />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  </ThemeProvider>
);

App.displayName = 'App';
export default App;
