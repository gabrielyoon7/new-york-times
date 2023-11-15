import { Outlet, useNavigate } from 'react-router-dom';
import { Container } from './Layout.style.ts';

function Layout() {
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <Outlet />
      </div>
      <div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/scrapped')}>Scrapped</button>
      </div>
    </Container>
  );
}

export default Layout;
