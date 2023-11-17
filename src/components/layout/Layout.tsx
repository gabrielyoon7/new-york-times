import { Outlet } from 'react-router-dom';
import { StyledContainer, StyledContent } from './Layout.styles.ts';
import Navbar from './navbar/Navbar.tsx';
import Header from './header/Header.tsx';

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
