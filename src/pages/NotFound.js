import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import PageHeader from '../components/ui/PageHeader';
import { Sprite } from '../components/ui/PixelArt';
import { ghost } from '../data/pixelArt';
import { setDocTitle } from '../utils/helpers';

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-wrap: wrap;
`;

const Ghost = styled.div`
  animation: ${float} 1.6s steps(4) infinite;
`;

const Links = styled.p`
  font-family: ${({ theme }) => theme.fonts.pixel};
  font-size: 19px;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const NotFound = () => {
  useEffect(() => setDocTitle('page not found'), []);
  return (
    <>
      <PageHeader title="Page not found" lede="That address does not exist on this site. It may have moved." />
      <Row>
        <Ghost>
          <Sprite rows={ghost} size={10} />
        </Ghost>
        <Links>
          <Link to="/">Home</Link>
          <Link to="/works">Projects</Link>
          <Link to="/contributions">Contributions</Link>
          <Link to="/blog">Writing</Link>
        </Links>
      </Row>
    </>
  );
};

NotFound.displayName = 'NotFoundPage';
export default NotFound;
