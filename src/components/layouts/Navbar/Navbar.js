import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from 'react-intl';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Logo, NavLinks, LinkStyled, UserName, Logout } from './NavbarStyled';
import logo from '../../../assets/logo';
import localization from './localization';

const Navbar = () => {
  const { user, logout, isAuthencated, clearErrors } = useContext(AuthContext);
  const { formatMessage } = useIntl();

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
      <Logout onClick={onLogout}>{formatMessage(localization.logout)}</Logout>
    </NavLinks>
  );

  const favItemLinks = (
    <NavLinks>
      <LinkStyled to="/register">{formatMessage(localization.signUp)}</LinkStyled>
      <LinkStyled to="/login">{formatMessage(localization.logIn)}</LinkStyled>
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
