import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
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
      {isAuthencated && (
        <LinkStyled to="/profilePage">
          <UserName>{user && user.name}</UserName>
        </LinkStyled>
      )}
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
      <Link to="/">
        <Logo src={logo} alt="logo" />
      </Link>
      {isAuthencated ? authLinks : favItemLinks}
    </Container>
  );
};

export default Navbar;
