import {Outlet} from 'react-router-dom';
import {StyledContainer} from './Layout.styles.ts';
import Navbar from '@components/layout/Navbar.tsx';
import {useRecoilValue} from 'recoil';
import {modalOpenRepository} from '@recoil/modalOpenState.ts';
import ArticleSearchFilterModal from '@pages/article-search-filter-modal/ArticleSearchFilterModal.tsx';
// import HomeIcon from '@assets/icon-home.svg?react';
// import ScrappedIcon from '@assets/icon-scrapped.svg?react';

function Layout() {
  const { openModal } = useRecoilValue(modalOpenRepository);

  return (
    <StyledContainer>
      <button onClick={() => openModal(<ArticleSearchFilterModal />)}>openModal</button>
      <div style={{ height: '100%' }}>
        <Outlet />
      </div>
      <Navbar />
    </StyledContainer>
  );
}

export default Layout;
