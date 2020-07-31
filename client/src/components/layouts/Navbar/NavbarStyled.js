import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { tabletUp } from '../../../styles/mediaQueries/mixins';

export const Container = styled.div`
  display: flex;
  background-color: ${props => props.theme.cadetblue};
  font-weight: 600;
  font-size: 20px;
  height: 24px;
  justify-content: center;
  padding: 16px 50px 16px 32px;
  ${tabletUp`
    padding: 16px 32px;
    justify-content: space-between;
  `};
`;

export const Logo = styled.img`
  width: 260px;
  height: 20px;
  padding-top: 2px;
  ${tabletUp`
    width: 290px;
    height: 23px;
    padding: 0;
  `};
`;

export const UserName = styled.div`
  font-weight: 200;
  padding-right: 16px;
`;

export const NavLinks = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 10px;
  background: ${props => props.theme.lightGray};
  position: absolute;
  right: 0px;
  top: 56px;
  height: 100px;
  ${tabletUp`
    display: flex;
    flex-direction: row;
    padding: 0;
    background: none;
    position: relative;
    top: 0;
    height: 0;
  `};
`;

export const Hamburger = styled.img`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 32px;
  height: 32px;
  right: 12px;
  top: 12px;
  ${tabletUp`
    display: none;
  `};
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
