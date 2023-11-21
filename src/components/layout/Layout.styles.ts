import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 560px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledArticlePreviewLayout = styled.div`
  margin: 60px 0 80px 0;

  padding: 20px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  width: calc(100% - 40px);
`;
