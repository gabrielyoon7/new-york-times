import {Outlet} from 'react-router-dom';
import {StyledContainer} from './Layout.styles.ts';
import Navbar from '@components/layout/Navbar.tsx';
import {useRecoilValue} from 'recoil';
import {modalOpenRepository} from '@recoil/modalOpenState.ts';
// import HomeIcon from '@assets/icon-home.svg?react';
// import ScrappedIcon from '@assets/icon-scrapped.svg?react';

function Layout() {
  const { openModal } = useRecoilValue(modalOpenRepository);

  return (
    <>
      <StyledContainer>
        <button onClick={() => openModal('hi')}>openModal</button>
        <div>
          <Outlet />
        </div>
        <Navbar />
      </StyledContainer>
    </>
  );
}

export default Layout;
