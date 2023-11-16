import { useRecoilValue } from 'recoil';
import { modalContentState, modalOpenRepository, modalOpenState } from '@recoil/modalOpenState.ts';
import { StyledModalBackdrop, StyledModalContent } from '@components/modal/Modal.styles.ts';
import { MouseEvent } from 'react';

function Modal() {
  const isModalOpen = useRecoilValue(modalOpenState);
  const modalContent = useRecoilValue(modalContentState);
  const { closeModal } = useRecoilValue(modalOpenRepository);

  const handleClickModalContent = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <StyledModalBackdrop isOpen={isModalOpen} onClick={closeModal}>
      <StyledModalContent onClick={handleClickModalContent}>{modalContent}</StyledModalContent>
    </StyledModalBackdrop>
  );
}

export default Modal;
