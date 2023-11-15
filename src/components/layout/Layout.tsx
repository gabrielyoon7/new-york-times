import {Outlet} from 'react-router-dom';
import {StyledContainer} from './Layout.style.ts';
import Navbar from '@components/layout/Navbar.tsx';
// import HomeIcon from '@assets/icon-home.svg?react';
// import ScrappedIcon from '@assets/icon-scrapped.svg?react';

function Layout() {
  return (
    <StyledContainer>
      <div>
        <Outlet />
      </div>
      <Navbar />
    </StyledContainer>
  );
}

export default Layout;
