import { Outlet } from 'react-router-dom';
import { StyledContainer } from './Layout.styles.ts';
import Navbar from './navbar/Navbar.tsx';
import ModalProvider from '@components/layout/modal-wrapper/ModalProvider.tsx';

function DefaultLayout() {
  return (
    <ModalProvider>
      <StyledContainer>
        <div>
          <Outlet />
        </div>
        <Navbar />
      </StyledContainer>
    </ModalProvider>
  );
}

export default DefaultLayout;
