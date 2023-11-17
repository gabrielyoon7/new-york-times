import { StyledArticleSearchButton, StyledHeaderWrapper } from './Header.styles.ts';
import ArticleSearchFilterModal from '@pages/article-search-filter-modal/ArticleSearchFilterModal.tsx';
import { useRecoilValue } from 'recoil';
import { modalOpenRepository } from '@recoil/modalOpenState.ts';
import { articleSearchFilterState } from '@recoil/articleSearchFilterState.ts';

// import SearchIcon from '@assets/search.svg?react';
// import CalendarCheckIcon from '@assets/calendar-check.svg?react';
import SearchIcon from './SearchIcon.tsx';
import CalendarCheckIcon from '@components/layout/header/CalendarCheckIcon.tsx';

function Header() {
  const { openModal } = useRecoilValue(modalOpenRepository);

  const articleSearchFilter = useRecoilValue(articleSearchFilterState);

  return (
    <StyledHeaderWrapper>
      <StyledArticleSearchButton
        isChecked={articleSearchFilter.headline.length > 0}
        onClick={() => openModal(<ArticleSearchFilterModal />)}
      >
        <SearchIcon isChecked={articleSearchFilter.headline.length > 0} />
        {articleSearchFilter.headline.length > 0 ? articleSearchFilter.headline : '전체 헤드라인'}
      </StyledArticleSearchButton>
      <StyledArticleSearchButton
        isChecked={articleSearchFilter.pubDate.length > 0}
        onClick={() => openModal(<ArticleSearchFilterModal />)}
      >
        <CalendarCheckIcon isChecked={articleSearchFilter.pubDate.length > 0} />
        {articleSearchFilter.pubDate.length > 0 ? articleSearchFilter.pubDate : '전체 날짜'}
      </StyledArticleSearchButton>
      <StyledArticleSearchButton
        isChecked={articleSearchFilter.gLocations.length > 0}
        onClick={() => openModal(<ArticleSearchFilterModal />)}
      >
        {articleSearchFilter.gLocations.length > 0
          ? JSON.stringify(articleSearchFilter.gLocations)
          : '전체 국가'}
      </StyledArticleSearchButton>
    </StyledHeaderWrapper>
  );
}

export default Header;
