import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Sprite } from './PixelArt';
import { iconUp } from '../../data/pixelArt';

const Btn = styled.button`
  position: fixed;
  right: 2.5%;
  bottom: 24px;
  z-index: 90;
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 2px solid ${({ theme }) => theme.colors.ink};
  box-shadow: 4px 4px 0 ${({ theme }) => theme.colors.shadow};
  transform: ${({ $show }) => ($show ? 'translateY(0)' : 'translateY(90px)')};
  transition: transform 160ms steps(4), background 90ms steps(1);
  svg { --n: ${({ theme }) => theme.colors.text}; }
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
  &:hover svg { --n: ${({ theme }) => theme.colors.accentInk}; }
  &:active { transform: translate(3px, 3px); box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.shadow}; }
`;

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = () => {
    if (window.__lenis) window.__lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Btn type="button" $show={show} onClick={go} aria-label="Back to top" tabIndex={show ? 0 : -1} aria-hidden={!show}>
      <Sprite rows={iconUp} size={2} />
    </Btn>
  );
};

BackToTop.displayName = 'BackToTop';
export default BackToTop;
