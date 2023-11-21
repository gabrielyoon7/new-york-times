import { ArticlePreview } from '@types';
import { getLocalStorage, setLocalStorage } from '@utils/storage.ts';
import { useState } from 'react';

export const useArticleScrapping = () => {
  const scrappedArticles = getLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', []);
  const [scrappedIds, setScrappedIds] = useState<string[]>(
    scrappedArticles.map((article) => article.id)
  );

  const handleStarClick = (article: ArticlePreview) => {
    setScrappedIds((prev) => {
      if (prev.includes(article.id)) {
        return prev.filter((id) => id !== article.id);
      }
      return [...prev, article.id];
    });

    const prevScrappedArticles = getLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', []);
    const removedArticle = prevScrappedArticles.filter((prev) => prev.id !== article.id);

    if (removedArticle.length === prevScrappedArticles.length) {
      setLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', [...prevScrappedArticles, article]);
    } else {
      setLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', [...removedArticle]);
    }
  };

  return { scrappedIds, handleStarClick };
};
