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
  padding: 16px 50px 16px 6px;
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
  margin-top: 8px;
  ${tabletUp`
    margin-top: 0;
  `};
`;

export const NavLinks = styled.div`
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  padding: 10px;
  background: ${props => props.theme.lightGray};
  position: absolute;
  right: 0px;
  top: 56px;
  height: 120px;
  z-index: 1;
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
  margin: 10px 20px;
  align-self: center;
  ${tabletUp`
    margin: 0 16px 0 0;
    align-self: auto;
  `};
`;

export const Logout = styled.div`
  cursor: pointer;
  color: black;
  text-align: center;
  margin-top: 8px;
  &:hover {
    color: white;
  }
  ${tabletUp`
    margin-top: 0;
  `};
`;

export const Flag = styled.img`
  width: 20px;
  height: 16px;
  margin: 4px 10px 0 0;
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
  ${tabletUp`
    margin: 4px 10px 0 10px;
  `};
`;

export const FlagContainer = styled.div`
  text-align: center;
  margin-top: 8px;
  ${tabletUp`
    margin: 0 8px 0 0;
  `};
`;
