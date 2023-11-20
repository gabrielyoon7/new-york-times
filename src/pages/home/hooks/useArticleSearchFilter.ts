import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Country } from '@types';

export const useArticleSearchFilter = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const headlineParam = queryParams.get('headline');
  const pubDateParam = queryParams.get('pub_date');
  const glocationsParam = queryParams.get('glocations');
  const glocationsArray = glocationsParam ? glocationsParam.split(',') : [];

  const initialCountries: Country[] = [
    { label: '대한민국', keyword: 'korea', checked: false },
    { label: '중국', keyword: 'china', checked: false },
    { label: '일본', keyword: 'japan', checked: false },
    { label: '미국', keyword: 'usa', checked: false },
    { label: '북한', keyword: 'north korea', checked: false },
    { label: '러시아', keyword: 'russia', checked: false },
    { label: '프랑스', keyword: 'france', checked: false },
    { label: '영국', keyword: 'uk', checked: false },
    { label: '독일', keyword: 'germany', checked: false },
  ].map((country) => {
    if (glocationsArray.includes(country.keyword)) {
      return { ...country, checked: true };
    }
    return country;
  });

  const [headline, setHeadline] = useState(headlineParam || '');
  const [pubDate, setPubDate] = useState(pubDateParam || '');
  const [countries, setCountries] = useState(initialCountries);

  useEffect(() => {
    setHeadline(headlineParam || '');
    setPubDate(pubDateParam || '');
    setCountries((prevCountries) =>
      prevCountries.map((country) => ({
        ...country,
        checked: glocationsArray.includes(country.keyword),
      }))
    );
  }, [location.search]);

  return { headline, setHeadline, pubDate, setPubDate, countries, setCountries };
};
