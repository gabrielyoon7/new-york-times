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
import { getLocalStorage, setLocalStorage } from '@utils/storage.ts';

interface ArticleCardPreviewProps {
  article: ArticlePreview;
  isScrapped?: boolean;
}

function ArticleCardPreview({ article, isScrapped = false }: ArticleCardPreviewProps) {
  const [starred, setStarred] = useState(isScrapped);
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

  const handleStarClick = () => {
    setStarred(!starred);
    const prevScrappedArticles = getLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', []);
    const removedArticle = prevScrappedArticles.filter((prev) => prev.id !== article.id);
    if (removedArticle.length === prevScrappedArticles.length) {
      setLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', [...prevScrappedArticles, article]);
    } else {
      setLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', [...removedArticle]);
    }
  };

  return (
    <StyledArticleCardPreviewWrapper>
      <StyledArticleCardPreviewHeader>
        <StyledArticleCardPreviewTitle>{article.headline}</StyledArticleCardPreviewTitle>
        <button style={{ margin: '4px 0 0 16px' }} onClick={handleStarClick}>
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
