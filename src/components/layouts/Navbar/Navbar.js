import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Logo, AuthLinks, GuestLinks, UserName, Logout } from './NavbarStyled';
import logo from '../../../assets/logo';

const Navbar = () => {
  const { user, logout, isAuthencated, clearErrors } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    clearErrors();
  };
  const authLinks = (
    <AuthLinks>
      <UserName>{user && user.name}</UserName>
      <Logout onClick={onLogout}>Logout</Logout>
    </AuthLinks>
  );

  const guestLinks = (
    <GuestLinks>
      <Link to="/register">SignUp</Link>
      <Link to="/login">Login</Link>
    </GuestLinks>
  );

  return (
    <Container>
      <Logo src={logo} alt="logo" />
      {isAuthencated ? authLinks : guestLinks}
    </Container>
  );
};

export default Navbar;
