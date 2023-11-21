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
import StarIcon from '@components/article-card-preview/StarIcon.tsx';
import { MouseEvent } from 'react';

interface ArticleCardPreviewProps {
  article: ArticlePreview;
  onClickStarButton: (newArticle: ArticlePreview) => void;
}

function ArticleCardPreview({ article, onClickStarButton }: ArticleCardPreviewProps) {
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

  const handleClickStarButton = (e: MouseEvent) => {
    e.stopPropagation();
    if (article.isScrapped) {
      alert('스크랩이 해제되었습니다.');
    } else {
      alert('스크랩되었습니다.');
    }
    onClickStarButton(article);
  };

  return (
    <StyledArticleCardPreviewWrapper onClick={() => (window.location.href = article.url)}>
      <StyledArticleCardPreviewHeader>
        <StyledArticleCardPreviewTitle>{article.headline}</StyledArticleCardPreviewTitle>
        <button style={{ margin: '4px 0 0 16px' }} onClick={handleClickStarButton}>
          <StarIcon isStarred={article.isScrapped} />
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
