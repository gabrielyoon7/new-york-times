import type { Meta } from '@storybook/react';
import { styled } from 'styled-components';
import Modal from '@components/modal/Modal.tsx';
import { useRecoilValue } from 'recoil';
import { modalOpenRepository } from '@recoil/modalOpenState.ts';

const meta = {
  title: 'layout/Modal',
  component: Modal,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

export const Default = () => {
  const { openModal } = useRecoilValue(modalOpenRepository);

  return (
    <div>
      <button onClick={() => openModal('hi')}>open</button>
      <Modal />
    </div>
  );
};
