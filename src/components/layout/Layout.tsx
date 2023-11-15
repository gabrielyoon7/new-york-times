import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from './Layout.style.ts';
import HomeIcon from '@assets/icon-home.svg?react';
import ScrappedIcon from '@assets/icon-scrapped.svg?react';

function Layout() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Outlet />
      </div>
      <div>
        <button onClick={() => navigate('/')}>
          <HomeIcon />
          Home
        </button>
        <button onClick={() => navigate('/scrapped')}>
          <ScrappedIcon />
          Scrapped
        </button>
      </div>
    </Container>
  );
}

export default Layout;
