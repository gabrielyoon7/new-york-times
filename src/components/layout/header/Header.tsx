import { StyledArticleSearchButton, StyledHeaderWrapper } from './Header.styles.ts';
import ArticleSearchFilterModal from '@pages/article-search-filter-modal/ArticleSearchFilterModal.tsx';
import { useRecoilValue } from 'recoil';
import { modalOpenRepository } from '@recoil/modalOpenState.ts';
import { articleSearchFilterState } from '@recoil/articleSearchFilterState.ts';

import SearchIcon from '@assets/search.svg?react';
import CalendarCheckIcon from '@assets/calendar-check.svg?react';

function Header() {
  const { openModal } = useRecoilValue(modalOpenRepository);

  const articleSearchFilter = useRecoilValue(articleSearchFilterState);

  return (
    <StyledHeaderWrapper>
      <StyledArticleSearchButton onClick={() => openModal(<ArticleSearchFilterModal />)}>
        <SearchIcon />
        {articleSearchFilter.headline.length > 0 ? articleSearchFilter.headline : '전체 헤드라인'}
      </StyledArticleSearchButton>
      <StyledArticleSearchButton onClick={() => openModal(<ArticleSearchFilterModal />)}>
        <CalendarCheckIcon />
        {articleSearchFilter.pubDate.length > 0 ? articleSearchFilter.pubDate : '전체 날짜'}
      </StyledArticleSearchButton>
      <StyledArticleSearchButton onClick={() => openModal(<ArticleSearchFilterModal />)}>
        {articleSearchFilter.gLocations.length > 0
          ? JSON.stringify(articleSearchFilter.gLocations)
          : '전체 국가'}
      </StyledArticleSearchButton>
    </StyledHeaderWrapper>
  );
}

export default Header;
