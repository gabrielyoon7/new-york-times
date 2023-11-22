import { createContext, MouseEvent, ReactNode, useState } from 'react';
import { StyledModalBackdrop, StyledModalContent } from './Modal.styles.ts';

export interface ModalContextType {
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

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
