import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Logo, AuthLinks, GuestLinks, UserName, Logout } from './NavbarStyled';

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
      <Link to='/register'>SignUp</Link>
      <Link to='/login'>Login</Link>
    </GuestLinks>
  );

  return (
    <Container>
      <Logo>Made by me</Logo>
      {isAuthencated ? authLinks : guestLinks}
    </Container>
  );
};

export default Navbar;
