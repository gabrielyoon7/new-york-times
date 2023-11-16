import styled from 'styled-components';

interface StyledModalBackdropProps {
  isOpen: boolean;
}

export const StyledModalBackdrop = styled.div<StyledModalBackdropProps>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const StyledModalContent = styled.div`
  background: white;
  position: absolute;
  border-radius: 16px;
  padding: 20px;
  max-width: 480px;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;
