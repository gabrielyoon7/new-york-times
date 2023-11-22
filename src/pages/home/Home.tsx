import Header from './components/header/Header.tsx';
import { StyledHomeLayout } from './Home.styles.ts';
import ArticleCardPreview from '@components/article-card-preview/ArticleCardPreview.tsx';
import { useInfiniteArticleSearch } from '@pages/home/hooks/useInfiniteArticleSearch.ts';
import { Fragment, useEffect, useRef } from 'react';
import { useArticleSearchFilter } from '@pages/home/hooks/useArticleSearchFilter.ts';
import { StyledArticlePreviewLayout } from '@components/layout/Layout.styles.ts';
import { useArticleScrapping } from '@pages/home/hooks/useArticleScrapping.ts';
import ArticleCardPreviewSkeleton from '@components/article-card-preview/ArticleCardPreview.skeleton.tsx';
import ErrorMessage from '@pages/home/components/error/ErrorMessage.tsx';

function Home() {
  const { scrappedIds, handleStarClick } = useArticleScrapping();

  const { headline, pubDate, countries } = useArticleSearchFilter();
  const { data, fetchNextPage, isFetching, hasNextPage, isFetchingNextPage, isError } =
    useInfiniteArticleSearch({
      headline,
      pubDate,
      countries,
    });

  const loadMoreElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && hasNextPage) {
          console.log('fetchNextPage');
          fetchNextPage();
        }
      });
    });

    if (loadMoreElementRef.current) {
      observer.observe(loadMoreElementRef.current);
    }

    return () => {
      if (loadMoreElementRef.current) {
        observer.unobserve(loadMoreElementRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const canFetchNextPage = !isFetching && !isFetchingNextPage && hasNextPage;

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
          {isFetching &&
            !isError &&
            Array.from({ length: 10 }).map((_, index) => (
              <ArticleCardPreviewSkeleton key={index} />
            ))}
        </StyledHomeLayout>
        {canFetchNextPage && !isError && <div ref={loadMoreElementRef} />}
        {isError && (
          <ErrorMessage isFetching={isFetching} handleRetryButton={() => fetchNextPage()} />
        )}
      </StyledArticlePreviewLayout>
    </>
  );
}

export default Home;
