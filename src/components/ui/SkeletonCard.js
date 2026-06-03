import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% { background-position: -300px 0; }
  100% { background-position: 300px 0; }
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: ${({ theme }) => theme.space(4)};
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 6px;
  min-height: 160px;
`;

const Bar = styled.div`
  height: ${({ $h }) => $h || 12}px;
  width: ${({ $w }) => $w || '100%'};
  border-radius: 3px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.surface} 25%,
    ${({ theme }) => theme.colors.border} 50%,
    ${({ theme }) => theme.colors.surface} 75%
  );
  background-size: 600px 100%;
  animation: ${shimmer} 1.4s infinite linear;
  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const SkeletonCard = () => (
  <Card aria-hidden="true">
    <Bar $h={14} $w="60%" />
    <Bar $h={10} $w="100%" />
    <Bar $h={10} $w="85%" />
    <Bar $h={10} $w="40%" />
    <Bar $h={28} $w="50%" />
  </Card>
);

SkeletonCard.displayName = 'SkeletonCard';
export default SkeletonCard;
