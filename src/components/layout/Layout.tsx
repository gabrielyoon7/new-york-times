import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledContent } from './Layout.styles.ts';
import Navbar from './navbar/Navbar.tsx';

function Layout() {
  return (
    <StyledContainer>
      <StyledContent>
        <Outlet />
      </StyledContent>
      <Navbar />
    </StyledContainer>
  );
}

export default Layout;
