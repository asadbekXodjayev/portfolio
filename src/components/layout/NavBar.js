import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { config } from '../../data/config';
import { useTheme } from '../../context/ThemeContext';
import { Sprite } from '../ui/PixelArt';
import { iconSun, iconMoon } from '../../data/pixelArt';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
`;

const Inner = styled.nav`
  width: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0;
  min-height: 62px;
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 22px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;
  &::before {
    content: '';
    width: 14px;
    height: 14px;
    background: ${({ theme }) => theme.colors.accent};
    border: 2px solid ${({ theme }) => theme.colors.ink};
    box-shadow: 2px 2px 0 ${({ theme }) => theme.colors.shadow};
  }
  &:hover { background: transparent; color: ${({ theme }) => theme.colors.primary}; }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const List = styled.ul`
  display: flex;
  gap: 4px;
  list-style: none;
  @media (max-width: 920px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    gap: 0;
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-bottom: 2px solid ${({ theme }) => theme.colors.ink};
    padding: 8px 2.5% 12px;
  }
`;

const Item = styled(NavLink)`
  display: block;
  padding: 6px 12px;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 17px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border: 2px solid transparent;
  &:hover { background: ${({ theme }) => theme.colors.surface}; color: ${({ theme }) => theme.colors.text}; }
  &.active {
    background: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accentInk};
    border-color: ${({ theme }) => theme.colors.ink};
  }
  @media (max-width: 920px) {
    padding: 12px 8px;
    border-bottom: 2px dotted ${({ theme }) => theme.colors.border};
  }
`;

const IconBtn = styled.button`
  display: inline-grid;
  place-items: center;
  width: 42px;
  height: 42px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 2px solid ${({ theme }) => theme.colors.ink};
  box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.shadow};
  &:hover { background: ${({ theme }) => theme.colors.accent}; }
  &:active { transform: translate(2px, 2px); box-shadow: 1px 1px 0 ${({ theme }) => theme.colors.shadow}; }
  svg { --n: ${({ theme }) => theme.colors.text}; }
  &:hover svg { --n: ${({ theme }) => theme.colors.accentInk}; }
`;

const MenuBtn = styled.button`
  display: none;
  height: 42px;
  padding: 0 12px;
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 17px;
  background: ${({ theme }) => theme.colors.bgSecondary};
  box-shadow: 3px 3px 0 ${({ theme }) => theme.colors.shadow};
  @media (max-width: 920px) { display: inline-flex; align-items: center; }
`;

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/works', label: 'Projects' },
  { to: '/contributions', label: 'Contributions' },
  { to: '/blog', label: 'Writing' },
  { to: '/skills', label: 'Skills' },
  { to: '/about', label: 'About' },
  { to: '/contacts', label: 'Contact' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { mode, toggle } = useTheme();
  const close = () => setOpen(false);

  return (
    <Header>
      <Inner aria-label="Main">
        <Brand to="/" onClick={close}>
          {config.name}
        </Brand>
        <Right>
          <List $open={open}>
            {links.map((l) => (
              <li key={l.to}>
                <Item to={l.to} end={l.end} onClick={close}>
                  {l.label}
                </Item>
              </li>
            ))}
          </List>
          <IconBtn
            type="button"
            onClick={toggle}
            aria-label={mode === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            <Sprite rows={mode === 'dark' ? iconSun : iconMoon} size={2} />
          </IconBtn>
          <MenuBtn type="button" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
            {open ? 'Close' : 'Menu'}
          </MenuBtn>
        </Right>
      </Inner>
    </Header>
  );
};

NavBar.displayName = 'NavBar';
export default NavBar;
