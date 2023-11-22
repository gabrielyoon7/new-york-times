import styled, { keyframes } from 'styled-components';
import { SkeletonProps } from '@components/common/skeleton/Skeleton.tsx';

export const skeletonAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const StyledSkeleton = styled.div<SkeletonProps>`
  ${({ width }) => (width ? `width: ${width};` : '')}
  ${({ height }) => (height ? `height: ${height};` : '')}

  border-radius: 8px;

  background: linear-gradient(-90deg, #c6cbd9, #fafafa, #c6cbd9, #fafafa);
  background-size: 400%;
  animation: ${skeletonAnimation} 5s infinite ease-out;
`;
