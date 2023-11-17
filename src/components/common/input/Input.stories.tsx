import type { Meta } from '@storybook/react';
import { styled } from 'styled-components';
import Input from '@components/common/input/Input.tsx';

const meta = {
  title: 'common/Input',
  component: Input,
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;

export const Default = () => {
  return <Input />;
};
