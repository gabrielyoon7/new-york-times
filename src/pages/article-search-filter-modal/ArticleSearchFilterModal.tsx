import React, { useRef, useState } from 'react';
import ArticleSearchFilterWrapper from './ArticleSearchFilterWrapper.tsx';
import Input from '@components/common/input/Input.tsx';
import { StyledArticleSearchFilterModal } from '@pages/article-search-filter-modal/ArticleSearchFilterModal.styles.ts';
import Button from '@components/common/button/Button.tsx';
import CountryPicker from '@pages/article-search-filter-modal/CountryPicker.tsx';
import { Country } from '@types';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { articleSearchFilterState } from '@recoil/articleSearchFilterState.ts';
import { modalOpenRepository } from '@recoil/modalOpenState.ts';

function ArticleSearchFilterModal() {
  const headlineRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);
  const [countries, setCountries] = useState<Country[]>([
    { label: '대한민국', keyword: 'korea', checked: false },
    { label: '중국', keyword: 'china', checked: false },
    { label: '일본', keyword: 'japan', checked: false },
    { label: '미국', keyword: 'usa', checked: false },
    { label: '북한', keyword: 'north korea', checked: false },
    { label: '러시아', keyword: 'russia', checked: false },
    { label: '프랑스', keyword: 'france', checked: false },
    { label: '영국', keyword: 'uk', checked: false },
    { label: '독일', keyword: 'germany', checked: false },
  ]);
  const setArticleSearchFilter = useSetRecoilState(articleSearchFilterState);
  const { closeModal } = useRecoilValue(modalOpenRepository);

  const handleSearch = () => {
    if (headlineRef.current && dateRef.current) {
      setArticleSearchFilter({
        headline: headlineRef.current.value,
        pubDate: dateRef.current.value,
        gLocations: countries
          .filter((country) => country.checked)
          .map((country) => country.keyword),
      });
      closeModal();
    }
  };

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
