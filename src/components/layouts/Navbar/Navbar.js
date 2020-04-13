import React, { useContext } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Logo, NavLinks, LinkStyled, UserName, Logout } from './NavbarStyled';
import logo from '../../../assets/logo';

const Navbar = () => {
  const { user, logout, isAuthencated, clearErrors } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    clearErrors();
  };
  const authLinks = (
    <NavLinks>
      {isAuthencated && <UserName>{user && user.name}</UserName>}
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
      <Logo src={logo} alt="logo" />
      {isAuthencated ? authLinks : favItemLinks}
    </Container>
  );
};

export default Navbar;
