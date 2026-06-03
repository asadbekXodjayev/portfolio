import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { config } from '../../data/config';

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 100;
  background: ${({ theme }) => theme.colors.bg}ee;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  backdrop-filter: blur(8px);
`;

const Inner = styled.nav`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
`;

const Brand = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-weight: 700;
  display: flex;
  gap: 6px;
  align-items: baseline;
`;

const Version = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 10px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media (max-width: 768px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: ${({ theme }) => theme.colors.bgSecondary};
    border-bottom: 1px solid ${({ theme }) => theme.colors.border};
    padding: 12px 16px;
    gap: 10px;
  }
`;

const Item = styled(NavLink)`
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 13px;
  color: ${({ theme }) => theme.colors.textMuted};
  &.active, &:hover { color: ${({ theme }) => theme.colors.primary}; }
`;

const Burger = styled.button`
  display: none;
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.primary};
  padding: 4px 10px;
  font-family: ${({ theme }) => theme.fonts.mono};
  @media (max-width: 768px) { display: inline-flex; }
`;

const links = [
  { to: '/', label: '~/home', end: true },
  { to: '/works', label: '~/works' },
  { to: '/skills', label: '~/skills' },
  { to: '/about', label: '~/about' },
  { to: '/contacts', label: '~/contact' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <Header>
      <Inner>
        <Brand to="/" onClick={close}>
          {config.handle}@dev <Version>{config.version}</Version>
        </Brand>
        <List $open={open}>
          {links.map((l) => (
            <li key={l.to}>
              <Item to={l.to} end={l.end} onClick={close}>
                {l.label}
              </Item>
            </li>
          ))}
        </List>
        <Burger onClick={() => setOpen((v) => !v)} aria-label="toggle menu">
          {open ? '[x]' : '[≡]'}
        </Burger>
      </Inner>
    </Header>
  );
};

NavBar.displayName = 'NavBar';
export default NavBar;
