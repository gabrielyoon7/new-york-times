import React, { useRef } from 'react';
import ArticleSearchFilterWrapper from './ArticleSearchFilterWrapper.tsx';
import Input from '@components/common/input/Input.tsx';
import { StyledArticleSearchFilterModal } from '@pages/article-search-filter-modal/ArticleSearchFilterModal.styles.ts';

function ArticleSearchFilterModal() {
  const headlineRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (headlineRef.current && dateRef.current) {
      alert(
        JSON.stringify({
          '헤드라인 값:': headlineRef.current.value,
          '날짜 값:': dateRef.current.value,
        })
      );
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
      <button onClick={handleSearch}>검색</button>
    </StyledArticleSearchFilterModal>
  );
}

export default ArticleSearchFilterModal;