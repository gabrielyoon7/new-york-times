import {
  StyledArticleCardPreviewAuthor,
  StyledArticleCardPreviewAuthorWrapper,
  StyledArticleCardPreviewDate,
  StyledArticleCardPreviewFooter,
  StyledArticleCardPreviewHeader,
  StyledArticleCardPreviewTitle,
  StyledArticleCardPreviewWrapper,
} from './ArticleCardPreview.styles.ts';
import { ArticlePreview } from '@types';
import StarIcon from '@pages/home/components/article-card-preview/StarIcon.tsx';
import { useState } from 'react';

interface ArticleCardPreviewProps {
  article: ArticlePreview;
}

function ArticleCardPreview({ article }: ArticleCardPreviewProps) {
  const [starred, setStarred] = useState(false);
  return (
    <StyledArticleCardPreviewWrapper>
      <StyledArticleCardPreviewHeader>
        <StyledArticleCardPreviewTitle>{article.headline}</StyledArticleCardPreviewTitle>
        <button onClick={() => setStarred(!starred)}>
          <StarIcon isStarred={starred} />
        </button>
      </StyledArticleCardPreviewHeader>
      <StyledArticleCardPreviewFooter>
        <StyledArticleCardPreviewAuthorWrapper>
          <StyledArticleCardPreviewAuthor>{article.source}</StyledArticleCardPreviewAuthor>
          <StyledArticleCardPreviewAuthor>{article.byline}</StyledArticleCardPreviewAuthor>
        </StyledArticleCardPreviewAuthorWrapper>
        <StyledArticleCardPreviewDate>{article.pub_date}</StyledArticleCardPreviewDate>
      </StyledArticleCardPreviewFooter>
    </StyledArticleCardPreviewWrapper>
  );
}

export default ArticleCardPreview;
