import { StyledNavbar } from '@components/layout/Layout.style.ts';
import NavLinkButton from '@components/layout/NavLinkButton.tsx';
import HomeIcon from '@components/layout/HomeIcon.tsx';
import ScrappedIcon from '@components/layout/ScrappedIcon.tsx';

function Navbar() {
  return (
    <StyledNavbar>
      <NavLinkButton path="/" icon={(color) => <HomeIcon color={color} />} title="홈" />
      <NavLinkButton
        path="/scrapped"
        icon={(color) => <ScrappedIcon color={color} />}
        title="스크랩"
      />
    </StyledNavbar>
  );
}

export default Navbar;
