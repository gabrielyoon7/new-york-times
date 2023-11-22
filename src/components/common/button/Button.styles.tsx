import styled from 'styled-components';
import { ButtonProps } from '@components/common/button/Button.tsx';

export const StyledButton = styled.button<ButtonProps>`
  ${({ fullWidth }) => (fullWidth && 'width: 100%') || ''};

  padding: 16px 24px;
  flex-shrink: 0;

  border-radius: 16px;
  background: ${({ disabled }) => (disabled ? '#E0E0E0' : '#3478f6')};
  color: ${({ disabled }) => (disabled ? 'black' : 'white')};
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.8px;
`;
