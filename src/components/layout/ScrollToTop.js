import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Jump to the top on route change (instantly — the page transition covers the jump).
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.__lenis) window.__lenis.scrollTo(0, { immediate: true, force: true });
    else window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

ScrollToTop.displayName = 'ScrollToTop';
export default ScrollToTop;
