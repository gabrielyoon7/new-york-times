import type { Meta } from '@storybook/react';
import { styled } from 'styled-components';
import Chip from './Chip.tsx';
import { useState } from 'react';

const meta = {
  title: 'common/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;

export const Default = () => {
  return (
    <>
      <Chip isClicked={true}>대한민국</Chip>
    </>
  );
};

export const Click = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <Chip isClicked={isClicked} onClick={() => setIsClicked(!isClicked)}>
        {isClicked ? 'clicked' : 'not clicked'}
      </Chip>
    </>
  );
};
