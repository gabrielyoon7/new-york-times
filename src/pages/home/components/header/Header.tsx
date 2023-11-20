import { StyledArticleSearchButton, StyledHeaderWrapper } from './Header.styles.ts';
import ArticleSearchFilterModal from '@pages/article-search-filter-modal/ArticleSearchFilterModal.tsx';
import { useRecoilValue } from 'recoil';
import { modalOpenRepository } from '@recoil/modalOpenState.ts';
// import CalendarCheckIcon from '@assets/calendar-check.svg?react';
import SearchIcon from './SearchIcon.tsx';
import CalendarCheckIcon from './CalendarCheckIcon.tsx';
import { useArticleSearchFilter } from '@pages/home/hooks/useArticleSearchFilter.ts';

function Header() {
  const { openModal } = useRecoilValue(modalOpenRepository);
  const { headline, pubDate, countries } = useArticleSearchFilter();

  const isHeadlineChecked = headline.length > 0;
  const isPubDateChecked = pubDate.length > 0;
  const checkedCountries = countries.filter((country) => country.checked);
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
        {isHeadlineChecked ? headline : '전체 헤드라인'}
      </StyledArticleSearchButton>
      <StyledArticleSearchButton
        isChecked={isPubDateChecked}
        onClick={() => openModal(<ArticleSearchFilterModal />)}
      >
        <CalendarCheckIcon isChecked={isPubDateChecked} />
        {isPubDateChecked ? pubDate : '전체 날짜'}
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
