import { Outlet, useNavigate } from 'react-router-dom';
import { Container, Navbar, NavbarButton, NavbarTitle } from './Layout.style.ts';
import HomeIcon from '@assets/icon-home.svg?react';
import ScrappedIcon from '@assets/icon-scrapped.svg?react';

function Layout() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Outlet />
      </div>
      <Navbar>
        <NavbarButton onClick={() => navigate('/')}>
          <HomeIcon />
          <NavbarTitle>홈</NavbarTitle>
        </NavbarButton>
        <NavbarButton onClick={() => navigate('/scrapped')}>
          <ScrappedIcon />
          <NavbarTitle>스크랩</NavbarTitle>
        </NavbarButton>
      </Navbar>
    </Container>
  );
}

export default Layout;
