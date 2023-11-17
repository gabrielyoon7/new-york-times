import NavLinkButton from './NavLinkButton.tsx';
import HomeIcon from './HomeIcon.tsx';
import ScrappedIcon from './ScrappedIcon.tsx';
import { StyledNavbar } from './Navbar.styles.ts';

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
