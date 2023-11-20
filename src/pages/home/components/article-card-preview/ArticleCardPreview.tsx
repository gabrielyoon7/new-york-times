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
  const date = new Date(article.pub_date);
  const koreanDate = date
    .toLocaleDateString('ko-KR', {
      weekday: 'long',
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    })
    .replace('요일', '');
  const dayOfWeek = koreanDate[koreanDate.length - 1];
  const modifiedDate = koreanDate
    .split(' ')
    .join('')
    .replace(dayOfWeek, ' (' + dayOfWeek + ')');

  return (
    <StyledArticleCardPreviewWrapper>
      <StyledArticleCardPreviewHeader>
        <StyledArticleCardPreviewTitle>{article.headline}</StyledArticleCardPreviewTitle>
        <button style={{ margin: '4px 0 0 16px' }} onClick={() => setStarred(!starred)}>
          <StarIcon isStarred={starred} />
        </button>
      </StyledArticleCardPreviewHeader>
      <StyledArticleCardPreviewFooter>
        <StyledArticleCardPreviewAuthorWrapper>
          <StyledArticleCardPreviewAuthor>{article.source}</StyledArticleCardPreviewAuthor>
          <StyledArticleCardPreviewAuthor>{article.byline}</StyledArticleCardPreviewAuthor>
        </StyledArticleCardPreviewAuthorWrapper>
        <StyledArticleCardPreviewDate>{modifiedDate}</StyledArticleCardPreviewDate>
      </StyledArticleCardPreviewFooter>
    </StyledArticleCardPreviewWrapper>
  );
}

export default ArticleCardPreview;
