import { atom } from 'recoil';
import { Country } from '@types';

export interface ArticleSearchFilter {
  headline: string;
  pubDate: string;
  gLocations: Country[];
}

export const articleSearchFilterState = atom<ArticleSearchFilter>({
  key: 'articleSearchFilterState',
  default: {
    headline: '',
    pubDate: '',
    gLocations: [
      { label: '대한민국', keyword: 'korea', checked: false },
      { label: '중국', keyword: 'china', checked: false },
      { label: '일본', keyword: 'japan', checked: false },
      { label: '미국', keyword: 'usa', checked: false },
      { label: '북한', keyword: 'north korea', checked: false },
      { label: '러시아', keyword: 'russia', checked: false },
      { label: '프랑스', keyword: 'france', checked: false },
      { label: '영국', keyword: 'uk', checked: false },
      { label: '독일', keyword: 'germany', checked: false },
    ],
  },
});
