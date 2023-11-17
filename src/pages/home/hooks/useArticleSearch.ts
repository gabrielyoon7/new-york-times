// import { useQuery } from '@tanstack/react-query';
//
// const fetchArticleSearch = async () => {
//   const response = await fetch(
//     `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=SczJij5BwTKYXGcuLv7MTqtdXIbhXPnW`
//   );
//   const data = await response.json();
//
//
//   return data;
// };
//
// export const useArticleSearch = () => {
//   return useQuery({
//     queryKey: ['articlesSearch'],
//     queryFn: () => fetchArticleSearch(),
//   });
// };
