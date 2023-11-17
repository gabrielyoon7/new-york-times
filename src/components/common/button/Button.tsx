import { ButtonHTMLAttributes, ReactNode } from 'react';
import { StyledButton } from './Button.styles.tsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

function Button({ children, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}

export default Button;
