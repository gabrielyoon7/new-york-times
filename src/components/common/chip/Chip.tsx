import { StyledChip } from './Chip.styles.tsx';
import { ButtonHTMLAttributes } from 'react';

interface ChipProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isClicked?: boolean;
  children: string;
}

function Chip({ children, isClicked, ...props }: ChipProps) {
  return (
    <StyledChip isClicked={isClicked} {...props}>
      {children}
    </StyledChip>
  );
}

export default Chip;
