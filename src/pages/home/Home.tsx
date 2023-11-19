import Header from './components/header/Header.tsx';
import { HomeContainer, HomeWrapper } from './Home.styles.ts';
import ArticleCardPreview from '@pages/home/components/article-card-preview/ArticleCardPreview.tsx';
import Button from '@components/common/button/Button.tsx';
import { useInfiniteArticleSearch } from '@pages/home/hooks/useInfiniteArticleSearch.ts';
import { Fragment } from 'react';
import { useRecoilValue } from 'recoil';
import { articleSearchFilterState } from '@recoil/articleSearchFilterState.ts';

function Home() {
  const articleSearchFilter = useRecoilValue(articleSearchFilterState);
  const { data, fetchNextPage, isFetching } = useInfiniteArticleSearch(articleSearchFilter);

  if (data === undefined) {
    return <></>;
  }

  return (
    <>
      <Header />
      <HomeWrapper>
        <HomeContainer>
          {data.pages.map((page) => (
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
                />
              ))}
            </Fragment>
          ))}
        </HomeContainer>
        <Button fullWidth onClick={() => fetchNextPage()} disabled={isFetching}>
          {isFetching ? 'loading...' : 'load more'}
        </Button>
      </HomeWrapper>
    </>
  );
}

export default Home;
