import React from 'react';
import ArticleSearchFilterWrapper from './ArticleSearchFilterWrapper.tsx';
import Input from '@components/common/input/Input.tsx';
import { StyledArticleSearchFilterModal } from '@pages/article-search-filter-modal/ArticleSearchFilterModal.styles.ts';
import Button from '@components/common/button/Button.tsx';
import CountryPicker from '@pages/article-search-filter-modal/CountryPicker.tsx';
import { useNavigate } from 'react-router-dom';
import { useArticleSearchFilter } from '@pages/home/hooks/useArticleSearchFilter.ts';

import { useModal } from '@components/layout/modal-wrapper/useModal.ts';

function ArticleSearchFilterModal() {
  const { headline, setHeadline, pubDate, setPubDate, countries, setCountries } =
    useArticleSearchFilter();

  const { closeModal } = useModal();
  const navigate = useNavigate();

  const handleSearch = () => {
    const gLocationsKeywords = countries
      .filter((country) => country.checked)
      .map((country) => country.keyword)
      .join(',');
    const gLocationsQuery = gLocationsKeywords.length > 0 ? `glocations=${gLocationsKeywords}` : '';
    const headlineQuery = headline.length > 0 ? `headline=${headline}` : '';
    const pubDateQuery = pubDate.length > 0 ? `pub_date=${pubDate}` : '';
    const queryString = [gLocationsQuery, headlineQuery, pubDateQuery]
      .filter((query) => query.length > 0)
      .join('&');
    navigate(`?${queryString}`);
    closeModal();
  };

  return (
    <StyledArticleSearchFilterModal>
      <ArticleSearchFilterWrapper
        title="헤드라인"
        renderInput={() => (
          <Input
            type="text"
            placeholder="검색하실 헤드라인을 입력해주세요."
            fullWidth
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
          />
        )}
      />
      <ArticleSearchFilterWrapper
        title="날짜"
        renderInput={() => (
          <Input
            type="date"
            placeholder={pubDate.length === 0 ? '날짜를 선택해주세요.' : pubDate}
            fullWidth
            value={pubDate}
            onChange={(e) => setPubDate(e.target.value)}
            onClick={(e) => e.currentTarget.showPicker()}
          />
        )}
      />
      <ArticleSearchFilterWrapper
        title="국가"
        renderInput={() => <CountryPicker countries={countries} setCountries={setCountries} />}
      />
      <Button fullWidth onClick={handleSearch}>
        필터 적용하기
      </Button>
    </StyledArticleSearchFilterModal>
  );
}

export default ArticleSearchFilterModal;
