import { Outlet } from 'react-router-dom';
import { StyledContainer } from './Layout.styles.ts';
import Navbar from './navbar/Navbar.tsx';
import Modal from '@components/modal/Modal.tsx';

function DefaultLayout() {
  return (
    <>
      <StyledContainer>
        <div>
          <Outlet />
        </div>
        <Navbar />
      </StyledContainer>
      <Modal />
    </>
  );
}

export default DefaultLayout;
