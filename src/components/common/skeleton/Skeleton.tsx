import { StyledSkeleton } from './Skeleton.styles.ts';

export interface SkeletonProps {
  width: string;
  height: string;
}

const Skeleton = ({ ...props }: SkeletonProps) => {
  return <StyledSkeleton {...props} />;
};

export default Skeleton;
