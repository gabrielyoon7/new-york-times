import Header from './components/header/Header.tsx';
import { HomeContainer, HomeWrapper } from './Home.styles.ts';
import ArticleCardPreview from '@pages/home/components/article-card-preview/ArticleCardPreview.tsx';
import Button from '@components/common/button/Button.tsx';
import { useInfiniteArticleSearch } from '@pages/home/hooks/useInfiniteArticleSearch.ts';
import { Fragment } from 'react';
import { useArticleSearchFilter } from '@pages/home/hooks/useArticleSearchFilter.ts';
import { ArticlePreview } from '@types';
import { getLocalStorage } from '@utils/storage.ts';

function Home() {
  const { headline, pubDate, countries } = useArticleSearchFilter();
  const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteArticleSearch({
    headline,
    pubDate,
    countries,
  });
  const scrappedArticles = getLocalStorage<ArticlePreview[]>('SCRAPPED_NY_TIMES', []);

  return (
    <>
      <Header />
      <HomeWrapper>
        <HomeContainer>
          {data?.pages.map((page) => (
            <Fragment key={page.nextPage}>
              {page.articles.map((articlePreview) => (
                <ArticleCardPreview
                  key={articlePreview.id}
                  article={{
                    id: `${articlePreview.id}`,
                    headline: articlePreview.headline,
                    byline: articlePreview.byline,
                    source: articlePreview.source,
                    pub_date: articlePreview.pub_date,
                  }}
                  isScrapped={scrappedArticles.some((article) => article.id === articlePreview.id)}
                />
              ))}
            </Fragment>
          ))}
        </HomeContainer>
        {hasNextPage && (
          <Button fullWidth onClick={() => fetchNextPage()} disabled={isFetching}>
            {isFetching ? 'loading...' : 'load more'}
          </Button>
        )}
      </HomeWrapper>
    </>
  );
}

export default Home;
