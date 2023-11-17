import React, { useEffect, useRef, useState } from 'react';
import ArticleSearchFilterWrapper from './ArticleSearchFilterWrapper.tsx';
import Input from '@components/common/input/Input.tsx';
import { StyledArticleSearchFilterModal } from '@pages/article-search-filter-modal/ArticleSearchFilterModal.styles.ts';
import Button from '@components/common/button/Button.tsx';
import CountryPicker from '@pages/article-search-filter-modal/CountryPicker.tsx';
import { Country } from '@types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { articleSearchFilterState } from '@recoil/articleSearchFilterState.ts';
import { modalOpenRepository } from '@recoil/modalOpenState.ts';

function ArticleSearchFilterModal() {
  const headlineRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const [articleSearchFilter, setArticleSearchFilter] = useRecoilState(articleSearchFilterState);
  const [countries, setCountries] = useState<Country[]>(articleSearchFilter.gLocations);
  const { closeModal } = useRecoilValue(modalOpenRepository);

  const handleSearch = () => {
    if (headlineRef.current && dateRef.current) {
      setArticleSearchFilter({
        headline: headlineRef.current.value,
        pubDate: dateRef.current.value,
        gLocations: countries,
      });
      closeModal();
    }
  };

  useEffect(() => {
    if (headlineRef.current) {
      headlineRef.current.value = articleSearchFilter.headline;
    }
    if (dateRef.current) {
      dateRef.current.value = articleSearchFilter.pubDate;
    }
  }, []);

  return (
    <StyledArticleSearchFilterModal>
      <ArticleSearchFilterWrapper
        title="헤드라인"
        renderInput={() => <Input type="text" fullWidth ref={headlineRef} />}
      />
      <ArticleSearchFilterWrapper
        title="날짜"
        renderInput={() => <Input type="date" fullWidth ref={dateRef} />}
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
