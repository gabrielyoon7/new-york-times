import Header from './components/header/Header.tsx';
import {HomeContainer, HomeWrapper} from './Home.styles.ts';
import ArticleCardPreview from '@pages/home/components/article-card-preview/ArticleCardPreview.tsx'; // import { useArticleSearch } from './hooks/useArticleSearch.ts';

// import { useArticleSearch } from './hooks/useArticleSearch.ts';

function Home() {
  // const { data } = useArticleSearch();
  const mockArticles = [];
  return (
    <>
      <Header />
      <HomeWrapper>
        <HomeContainer>
          {Array.from({ length: 20 }, (_, i) => (
            <ArticleCardPreview
              key={i}
              article={{
                headline: `Headline ${i}`,
                byline: `Byline ${i}`,
                source: `Source ${i}`,
                pub_date: '2021-01-01T00:00:00.000Z',
              }}
            />
          ))}
        </HomeContainer>
      </HomeWrapper>
    </>
  );
}

export default Home;
