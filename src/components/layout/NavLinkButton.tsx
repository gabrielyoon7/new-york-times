import { StyledNavbarButton, StyledNavbarTitle } from './Layout.styles.ts';
import { useLocation, useNavigate } from 'react-router-dom';
import { ReactNode } from 'react';

interface NavLinkButtonProps {
  path: '/' | '/scrapped';
  icon: (color: 'white' | '#6D6D6D') => ReactNode;
  title: string;
}

function NavLinkButton({ path, icon, title }: NavLinkButtonProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const color = location.pathname === path ? 'white' : '#6D6D6D';

  return (
    <StyledNavbarButton color={color} onClick={() => navigate(path)}>
      {icon(color)}
      <StyledNavbarTitle>{title}</StyledNavbarTitle>
    </StyledNavbarButton>
  );
}

export default NavLinkButton;
