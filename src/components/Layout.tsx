import { Outlet, useNavigate } from 'react-router-dom';

function Layout() {
  const navigate = useNavigate();

  return (
    <div>
      <Outlet />
      <div>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/scrapped')}>Scrapped</button>
      </div>
    </div>
  );
}

export default Layout;
