import { createContext, MouseEvent, ReactNode, useContext, useState } from 'react';
import { StyledModalBackdrop, StyledModalContent } from './Modal.styles.ts';

interface ModalContextType {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const useModal = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('모달을 사용하려면 ModalProvider를 감싸야 합니다.');
  }
  return context;
};

interface ModalProviderProps {
  children: ReactNode;
}

function ModalProvider({ children }: ModalProviderProps) {
  const [modalContent, setModalContent] = useState<ReactNode | null>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleClickModalContent = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modalContent && (
        <StyledModalBackdrop onClick={closeModal}>
          <StyledModalContent onClick={handleClickModalContent}>{modalContent}</StyledModalContent>
        </StyledModalBackdrop>
      )}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
