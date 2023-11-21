import ScrappedNotFound from './components/not-found/ScrappedNotFound.tsx';
import { getLocalStorage } from '@utils/storage.ts';
import { ArticlePreview } from '@types';
import ArticleCardPreview from '@components/article-card-preview/ArticleCardPreview.tsx';

function Scrapped() {
  const scrappedArticles = getLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', []);
  if (scrappedArticles.length === 0) {
    return <ScrappedNotFound />;
  }
  return (
    <>
      {scrappedArticles.map((article) => (
        <ArticleCardPreview key={article.id} article={article} isScrapped={true} />
      ))}
    </>
  );
}

export default Scrapped;
