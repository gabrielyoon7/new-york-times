import { ReactNode } from 'react';
import {
  StyledArticleSearchFilterTitle,
  StyledArticleSearchFilterWrapper,
} from '@pages/article-search-filter-modal/ArticleSearchFilterWrapper.styles.ts';

interface ArticleSearchFilterWrapperProps {
  title: string;
  renderInput: () => ReactNode;
}

function ArticleSearchFilterWrapper({ title, renderInput }: ArticleSearchFilterWrapperProps) {
  return (
    <StyledArticleSearchFilterWrapper>
      <StyledArticleSearchFilterTitle>{title}</StyledArticleSearchFilterTitle>
      {renderInput()}
    </StyledArticleSearchFilterWrapper>
  );
}

export default ArticleSearchFilterWrapper;
