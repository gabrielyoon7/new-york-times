import { atom } from 'recoil';

export interface ArticleSearchFilter {
  headline: string;
  pubDate: string;
  gLocations: string[];
}

export const articleSearchFilterState = atom<ArticleSearchFilter>({
  key: 'articleSearchFilterState',
  default: {
    headline: '',
    pubDate: '',
    gLocations: [],
  },
});
