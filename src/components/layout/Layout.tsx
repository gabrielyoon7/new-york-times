import {Outlet} from 'react-router-dom';
import {StyledContainer, StyledContent} from './Layout.styles.ts';
import Navbar from '@components/layout/Navbar.tsx';
import Header from './Header.tsx';
// import HomeIcon from '@assets/icon-home.svg?react';
// import ScrappedIcon from '@assets/icon-scrapped.svg?react';

function Layout() {
  return (
    <StyledContainer>
      <Header />
      <StyledContent>
        <Outlet />
      </StyledContent>
      <Navbar />
    </StyledContainer>
  );
}

export default Layout;
