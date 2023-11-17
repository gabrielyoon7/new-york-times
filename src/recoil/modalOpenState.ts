import { atom, selector } from 'recoil';
import { ReactNode } from 'react';

export const modalOpenState = atom<boolean>({
  key: 'modalOpenState',
  default: false,
});

export const modalContentState = atom<ReactNode>({
  key: 'modalContentState',
  default: null,
});

export const modalOpenRepository = selector({
  key: 'modalOpenRepository',
  get: ({ getCallback }) => {
    const openModal = getCallback(({ set }) => (content: ReactNode) => {
      set(modalContentState, content);
      set(modalOpenState, true);
    });

    const closeModal = getCallback(({ set }) => () => {
      set(modalContentState, null);
      set(modalOpenState, false);
    });

    return { openModal, closeModal };
  },
});
