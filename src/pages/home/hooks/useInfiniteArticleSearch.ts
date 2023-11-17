import { useInfiniteQuery } from '@tanstack/react-query';
import { ArticlePreview } from '@types';

interface InfiniteArticleSearchResponse {
  articles: ArticlePreview[];
  nextPage: number;
}

const fetchProjects = async ({ pageParam }: { pageParam: number }) => {
  const res = await fetch(
    `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&page=${pageParam}&api-key=SczJij5BwTKYXGcuLv7MTqtdXIbhXPnW`
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

export const useInfiniteArticleSearch = () => {
  return useInfiniteQuery({
    queryKey: ['articleSearch'],
    queryFn: fetchProjects,
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => (lastPage.nextPage > 0 ? lastPage.nextPage : undefined),
    refetchOnWindowFocus: false,
  });
};
