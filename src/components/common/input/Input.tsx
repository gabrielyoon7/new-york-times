import { forwardRef, InputHTMLAttributes } from 'react';
import { StyledInput } from './Input.styles.tsx';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});

export default Input;
