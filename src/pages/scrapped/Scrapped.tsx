import ScrappedNotFound from './components/not-found/ScrappedNotFound.tsx';
import { getLocalStorage } from '@utils/storage.ts';
import { ArticlePreview } from '@types';
import ArticleCardPreview from '@components/article-card-preview/ArticleCardPreview.tsx';
import { useArticleScrapping } from '@pages/home/hooks/useArticleScrapping.ts';
import { StyledArticlePreviewLayout } from '@components/layout/Layout.styles.ts';
import { StyledHomeLayout } from '@pages/home/Home.styles.ts';
import Header from '@pages/home/components/header/Header.tsx';
import { useArticleSearchFilter } from '@pages/home/hooks/useArticleSearchFilter.ts';

function Scrapped() {
  const { scrappedIds, handleStarClick } = useArticleScrapping();
  const { headline, pubDate, countries } = useArticleSearchFilter();

  const scrappedArticles = getLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', []);
  if (scrappedArticles.length === 0) {
    return <ScrappedNotFound />;
  }

  return (
    <>
      <Header />
      <StyledArticlePreviewLayout>
        <StyledHomeLayout>
          {scrappedArticles
            .filter((article) => {
              if (headline === '') {
                return true;
              }
              return article.headline.includes(headline);
            })
            .filter((article) => {
              if (pubDate === '') {
                return true;
              }
              return article.pub_date.includes(pubDate);
            })
            .filter((article) => {
              const checkedCountries = countries.filter((country) => country.checked);
              if (checkedCountries.length === 0) {
                return true;
              }
              const glocations = article.glocations.map((glocation) => glocation.toLowerCase());
              if (glocations.length === 0) {
                return false;
              }
              return glocations.some((glocation) =>
                checkedCountries.some((country) => glocation.includes(country.keyword))
              );
            })
            .map((article) => (
              <ArticleCardPreview
                key={article.id}
                article={{ ...article, isScrapped: scrappedIds.includes(article.id) }}
                onClickStarButton={handleStarClick}
              />
            ))}
        </StyledHomeLayout>
      </StyledArticlePreviewLayout>
    </>
  );
}

export default Scrapped;
