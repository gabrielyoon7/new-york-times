import { ReactNode } from 'react';
import { StyledButton } from './Button.styles.tsx';

interface ButtonProps {
  children: ReactNode;
  fullWidth?: boolean;
}

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
