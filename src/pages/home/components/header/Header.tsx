import { StyledArticleSearchButton, StyledHeaderWrapper } from './Header.styles.ts';
import ArticleSearchFilterModal from '@pages/article-search-filter-modal/ArticleSearchFilterModal.tsx';
import { useRecoilValue } from 'recoil';
import { modalOpenRepository } from '@recoil/modalOpenState.ts';
import { articleSearchFilterState } from '@recoil/articleSearchFilterState.ts'; // import SearchIcon from '@assets/search.svg?react';
// import CalendarCheckIcon from '@assets/calendar-check.svg?react';
import SearchIcon from './SearchIcon.tsx';
import CalendarCheckIcon from './CalendarCheckIcon.tsx';

function Header() {
  const { openModal } = useRecoilValue(modalOpenRepository);
  const articleSearchFilter = useRecoilValue(articleSearchFilterState);

  const isHeadlineChecked = articleSearchFilter.headline.length > 0;
  const isPubDateChecked = articleSearchFilter.pubDate.length > 0;
  const checkedCountries = articleSearchFilter.gLocations.filter((country) => country.checked);
  const areCountriesChecked = checkedCountries.length > 0;
  const countriesButtonTitle = areCountriesChecked
    ? checkedCountries.length === 1
      ? checkedCountries[0].label
      : `${checkedCountries[0].label} 외 ${checkedCountries.length - 1}개`
    : '전체 국가';

  return (
    <StyledHeaderWrapper>
      <StyledArticleSearchButton
        isChecked={isHeadlineChecked}
        onClick={() => openModal(<ArticleSearchFilterModal />)}
      >
        <SearchIcon isChecked={isHeadlineChecked} />
        {isHeadlineChecked ? articleSearchFilter.headline : '전체 헤드라인'}
      </StyledArticleSearchButton>
      <StyledArticleSearchButton
        isChecked={isPubDateChecked}
        onClick={() => openModal(<ArticleSearchFilterModal />)}
      >
        <CalendarCheckIcon isChecked={isPubDateChecked} />
        {isPubDateChecked ? articleSearchFilter.pubDate : '전체 날짜'}
      </StyledArticleSearchButton>
      <StyledArticleSearchButton
        isChecked={areCountriesChecked}
        onClick={() => openModal(<ArticleSearchFilterModal />)}
      >
        {countriesButtonTitle}
      </StyledArticleSearchButton>
    </StyledHeaderWrapper>
  );
}

export default Header;
