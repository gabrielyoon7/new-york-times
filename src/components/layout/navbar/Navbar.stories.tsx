import type { Meta } from '@storybook/react';
import { styled } from 'styled-components';
import Navbar from './Navbar.tsx';

const meta = {
  title: 'layout/Navbar',
  component: Navbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;

export const Default = () => {
  return <Navbar />;
};
