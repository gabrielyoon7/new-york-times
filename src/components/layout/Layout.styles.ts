import styled from 'styled-components';

export const StyledContainer = styled.div`
  max-width: 560px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledContent = styled.div`
  height: 100%;
`;

export const StyledNavbar = styled.div`
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
