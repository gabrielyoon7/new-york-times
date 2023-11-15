import styled from 'styled-components';

export const Container = styled.div`
  max-width: 560px;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const Navbar = styled.div`
  display: flex;
  padding: 20px 80px;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background: #000;
`;

export const NavbarButton = styled.button`
  background: transparent;
  border: none;
  color: #6d6d6d;
  cursor: pointer;
`;

export const NavbarTitle = styled.div`
  text-align: center;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: uppercase;

  margin-top: 9px;
`;
