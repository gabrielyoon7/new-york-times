import styled from 'styled-components';

interface StyledChipProps {
  isClicked?: boolean;
}

export const StyledChip = styled.button<StyledChipProps>`
  padding: 6px 12px 4px 12px;
  border-radius: 30px;
  border: 1px solid #f2f2f2;
  ${({ isClicked }) =>
    isClicked
      ? `
        background: #82b0f4;
        color: #fff;
        `
      : `
        color: #6D6D6D;
        `}
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.56px;
  margin-right: 8px;
  margin-bottom: 8px;
`;
