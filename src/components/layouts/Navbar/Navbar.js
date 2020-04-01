import React, { useContext } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import {
  Container,
  LogoNameContainer,
  Logo,
  NavLinks,
  LinkStyled,
  UserName,
  Logout
} from './NavbarStyled';
import logo from '../../../assets/logo';

const Navbar = () => {
  const { user, logout, isAuthencated, clearErrors } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    clearErrors();
  };
  const authLinks = (
    <NavLinks>
      <Logout onClick={onLogout}>Logout</Logout>
    </NavLinks>
  );

  const favItemLinks = (
    <NavLinks>
      <LinkStyled to="/register">SignUp</LinkStyled>
      <LinkStyled to="/login">Login</LinkStyled>
    </NavLinks>
  );

  return (
    <Container>
      <LogoNameContainer>
        <Logo src={logo} alt="logo" />
        {isAuthencated && <UserName>{user && user.name}</UserName>}
      </LogoNameContainer>
      {isAuthencated ? authLinks : favItemLinks}
    </Container>
  );
};

export default Navbar;
