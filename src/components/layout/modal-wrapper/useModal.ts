import { useContext } from 'react';
import { ModalContext, ModalContextType } from './ModalProvider.tsx';

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('모달을 사용하려면 ModalProvider를 감싸야 합니다.');
  }
  return context;
};
