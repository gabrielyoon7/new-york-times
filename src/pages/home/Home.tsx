import Header from './components/header/Header.tsx';
import { StyledHomeLayout } from './Home.styles.ts';
import ArticleCardPreview from '@components/article-card-preview/ArticleCardPreview.tsx';
import Button from '@components/common/button/Button.tsx';
import { useInfiniteArticleSearch } from '@pages/home/hooks/useInfiniteArticleSearch.ts';
import { Fragment } from 'react';
import { useArticleSearchFilter } from '@pages/home/hooks/useArticleSearchFilter.ts';
import { StyledArticlePreviewLayout } from '@components/layout/Layout.styles.ts';
import { useArticleScrapping } from '@pages/home/hooks/useArticleScrapping.ts';

function Home() {
  const { scrappedIds, handleStarClick } = useArticleScrapping();

  const { headline, pubDate, countries } = useArticleSearchFilter();
  const { data, fetchNextPage, isFetching, hasNextPage } = useInfiniteArticleSearch({
    headline,
    pubDate,
    countries,
  });

  return (
    <>
      <Header />
      <StyledArticlePreviewLayout>
        <StyledHomeLayout>
          {data?.pages.map((page) => (
            <Fragment key={page.nextPage}>
              {page.articles.map((articlePreview) => (
                <ArticleCardPreview
                  key={articlePreview.id}
                  article={{
                    ...articlePreview,
                    isScrapped: scrappedIds.includes(articlePreview.id),
                  }}
                  onClickStarButton={handleStarClick}
                />
              ))}
            </Fragment>
          ))}
        </StyledHomeLayout>
        {hasNextPage && (
          <Button fullWidth onClick={() => fetchNextPage()} disabled={isFetching}>
            {isFetching ? 'loading...' : 'load more'}
          </Button>
        )}
      </StyledArticlePreviewLayout>
    </>
  );
}

export default Home;
