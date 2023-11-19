import { useInfiniteQuery } from '@tanstack/react-query';
import { ArticlePreview } from '@types';
import { ArticleSearchFilter } from '@recoil/articleSearchFilterState.ts';

interface InfiniteArticleSearchResponse {
  articles: ArticlePreview[];
  nextPage: number;
}

interface FetchArticleSearchParams {
  pageParam: number;
  articleSearchFilter: ArticleSearchFilter;
}

const fetchArticleSearch = async ({ pageParam, articleSearchFilter }: FetchArticleSearchParams) => {
  const { headline, pubDate, gLocations } = articleSearchFilter;
  const gLocationsKeywords = gLocations
    .filter((gLocation) => gLocation.checked)
    .map((gLocation) => gLocation.keyword);
  const gLocationsQuery =
    gLocationsKeywords.length > 0 ? `glocations:("${gLocationsKeywords}")` : '';
  const headlineQuery = headline.length > 0 ? `headline:("${headline}")` : '';
  const pubDateQuery = pubDate.length > 0 ? `pub_date:("${pubDate}")` : '';
  const filterQuery = [gLocationsQuery, headlineQuery, pubDateQuery]
    .filter((q) => q.length > 0)
    .join(' AND ');

  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?${
      filterQuery.length > 0 ? `fq=${filterQuery}` : ''
    }&page=${pageParam}&api-key=SczJij5BwTKYXGcuLv7MTqtdXIbhXPnW`
  );
  const data = await res.json();
  const articles: ArticlePreview[] = data.response.docs.map((article: any) => {
    return {
      id: article._id,
      source: article.source,
      headline: article.headline.main,
      pub_date: article.pub_date,
      byline: article.byline.original,
    };
  });
  return {
    articles,
    nextPage: pageParam === 199 ? -1 : pageParam + 1,
  };
};

export const useInfiniteArticleSearch = (articleSearchFilter: ArticleSearchFilter) => {
  return useInfiniteQuery({
    queryKey: ['articleSearch', articleSearchFilter],
    queryFn: ({ pageParam = 0 }) => fetchArticleSearch({ pageParam, articleSearchFilter }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => (lastPage.nextPage > 0 ? lastPage.nextPage : undefined),
    refetchOnWindowFocus: false,
  });
};
