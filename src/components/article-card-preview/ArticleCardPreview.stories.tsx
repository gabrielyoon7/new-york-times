import type { Meta } from '@storybook/react';
import { styled } from 'styled-components';
import ArticleCardPreview from './ArticleCardPreview.tsx';
import { ArticlePreview } from '@types';

const meta = {
  title: 'layout/ArticleCardPreview',
  component: ArticleCardPreview,
  tags: ['autodocs'],
} satisfies Meta<typeof ArticleCardPreview>;

export default meta;

const Template = styled.div`
  background: #f0f1f4;
  padding: 20px;
  width: 620px;
`;

export const Default = () => {
  const defaultArticle: ArticlePreview = {
    id: '123',
    source: 'The New York Times',
    headline: 'Biden’s Covid Relief Plan Is Popular. Will It Be Enough?',
    byline: 'By Giovanni Russonello',
    pub_date: '2021-02-27T10:00:09+0000',
    url: 'https://www.nytimes.com/2021/02/27/us/politics/biden-covid-relief-plan.html',
    glocations: [''],
    isScrapped: true,
  };

  return (
    <Template>
      <ArticleCardPreview article={defaultArticle} onClickStarButton={() => {}} />
    </Template>
  );
};
