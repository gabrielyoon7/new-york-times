import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledContent } from './Layout.styles.ts';
import Navbar from './navbar/Navbar.tsx';
import Modal from '@components/modal/Modal.tsx';
import React from 'react';

function Layout() {
  return (
    <>
      <StyledContainer>
        <StyledContent>
          <Outlet />
        </StyledContent>
        <Navbar />
      </StyledContainer>
      <Modal />
    </>
  );
}

export default Layout;
