import { useInfiniteQuery } from '@tanstack/react-query';
import { ArticlePreview, Country } from '@types';

interface ArticleSearchFilter {
  headline: string;
  pubDate: string;
  countries: Country[];
}

const fetchArticleSearch = async ({
  pageParam,
  countries,
  pubDate,
  headline,
}: ArticleSearchFilter & { pageParam: number }) => {
  const gLocationsKeywords = countries
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
      url: article.web_url,
      isScrapped: false,
    };
  });
  const isLastPage = data.response.meta.hits < data.response.meta.offset + 10;
  const isLimitPage = pageParam === 199;
  return {
    articles,
    nextPage: isLastPage || isLimitPage ? -1 : pageParam + 1,
  };
};

export const useInfiniteArticleSearch = (articleSearchFilter: ArticleSearchFilter) => {
  return useInfiniteQuery({
    queryKey: ['articleSearch', articleSearchFilter],
    queryFn: ({ pageParam = 0 }) => fetchArticleSearch({ pageParam, ...articleSearchFilter }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => (lastPage.nextPage > 0 ? lastPage.nextPage : undefined),
    refetchOnWindowFocus: false,
  });
};
