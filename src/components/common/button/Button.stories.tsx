import type { Meta } from '@storybook/react';
import { styled } from 'styled-components';
import Button from '@components/common/button/Button.tsx';

const meta = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

export const Default = () => {
  return <Button>버튼 적용하기</Button>;
};

export const FullWidth = () => {
  return <Button fullWidth>버튼 적용하기</Button>;
};
