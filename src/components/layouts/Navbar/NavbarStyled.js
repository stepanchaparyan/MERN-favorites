import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: cadetblue;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 20px;
`;

export const LogoNameContainer = styled.div`
  display: flex;
`;

export const Logo = styled.img`
  width: 40px;
  height: auto;
`;

export const UserName = styled.div`
  font-weight: 200;
  padding-left: 32px;
`;

export const NavLinks = styled.div`
  display: flex;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  padding: 0 10px;
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
  }
`;

export const Logout = styled.div`
  cursor: pointer;
  color: black;
  &:hover {
    color: white;
  }
`;
