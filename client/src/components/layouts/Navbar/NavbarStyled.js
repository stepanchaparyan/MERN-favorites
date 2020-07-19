import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.cadetblue};
  padding: 16px 32px;
  font-weight: 600;
  font-size: 20px;
  height: 23px;
`;

export const Logo = styled.img`
  width: 290px;
  height: 23px;
`;

export const UserName = styled.div`
  font-weight: 200;
  padding-right: 16px;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkStyled = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  margin-left: 16px;
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

export const Img = styled.img`
  width: 20px;
  height: 16px;
  margin-top: 4px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
