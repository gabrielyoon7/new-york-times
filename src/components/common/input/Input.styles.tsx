import styled from 'styled-components';

interface StyledInputProps {
  fullWidth?: boolean;
}

export const StyledInput = styled.input<StyledInputProps>`
  ${({ fullWidth }) => fullWidth && 'width: calc(100% - 40px);'}
  display: flex;
  padding: 10px 20px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #c4c4c4;
  color: #c4c4c4;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.56px;
`;
