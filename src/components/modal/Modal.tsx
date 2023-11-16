import { useRecoilValue } from 'recoil';
import { modalContentState, modalOpenRepository, modalOpenState } from '@recoil/modalOpenState.ts';
import { StyledModalBackdrop, StyledModalContent } from '@components/modal/Modal.styles.ts';

function Modal() {
  const isModalOpen = useRecoilValue(modalOpenState);
  const modalContent = useRecoilValue(modalContentState);
  const { closeModal } = useRecoilValue(modalOpenRepository);

  return (
    <StyledModalBackdrop isOpen={isModalOpen} onClick={closeModal}>
      <StyledModalContent>{modalContent}</StyledModalContent>
    </StyledModalBackdrop>
  );
}

export default Modal;
