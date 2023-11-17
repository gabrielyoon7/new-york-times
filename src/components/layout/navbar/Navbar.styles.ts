import styled from 'styled-components';

export const StyledNavbar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;

  display: flex;
  padding: 20px 80px;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background: #000;
`;

interface StyledNavbarButtonProps {
  color?: 'white' | '#6D6D6D';
}

export const StyledNavbarButton = styled.button<StyledNavbarButtonProps>`
  background: transparent;
  border: none;
  color: ${({ color }) => color || '#6D6D6D'};
  cursor: pointer;
`;
export const StyledNavbarTitle = styled.div`
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  margin-top: 9px;
`;
