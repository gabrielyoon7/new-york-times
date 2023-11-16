import styled from 'styled-components';

interface StyledButtonProps {
  fullWidth?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ fullWidth }) => (fullWidth && 'width: 100%') || ''};

  padding: 16px 24px;
  flex-shrink: 0;

  border-radius: 16px;
  background: #3478f6;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 150% */
  letter-spacing: -0.8px;
`;
