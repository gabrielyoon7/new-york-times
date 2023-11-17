import styled from 'styled-components';

export const StyledArticleCardPreviewWrapper = styled.div`
  border-radius: 8px;
  background: #fefefe;

  display: flex;
  padding: 10px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledArticleCardPreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const StyledArticleCardPreviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;

export const StyledArticleCardPreviewTitle = styled.p`
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px; /* 155.556% */
  letter-spacing: -0.9px;
  text-transform: uppercase;
`;

export const StyledArticleCardPreviewAuthorWrapper = styled.p`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

export const StyledArticleCardPreviewAuthor = styled.p`
  color: #100;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.65px;
`;

export const StyledArticleCardPreviewDate = styled.p`
  color: #6d6d6d;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 153.846% */
  letter-spacing: -0.65px;
`;
