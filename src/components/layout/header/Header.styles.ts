import styled from 'styled-components';

export const StyledHeaderWrapper = styled.div`
  padding: 13px 0px 13px 20px;
  display: inline-flex;
  align-items: center;
  border-bottom: 1px solid #c4c4c4;
  background: #fff;

  width: calc(100% - 20px);
`;

interface StyledArticleSearchButtonProps {
  isChecked: boolean;
}

export const StyledArticleSearchButton = styled.button<StyledArticleSearchButtonProps>`
  display: flex;
  padding: 6px 12px 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;

  margin-right: 7px;

  border-radius: 30px;
  border: 1px solid ${({ isChecked }) => (isChecked ? '#3478F6' : '#6D6D6D')};

  color: ${({ isChecked }) => (isChecked ? '#3478F6' : '#6D6D6D')};
  text-align: right;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: -0.56px;
`;
