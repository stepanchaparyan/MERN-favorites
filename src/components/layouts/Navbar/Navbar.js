import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Logo, NavLinks, LinkStyled, UserName, Logout, Img } from './NavbarStyled';
import logo from '../../../assets/logo';
import localization from './localization';
import armFlag from '../../../assets/arm.png';
import usaFlag from '../../../assets/usa.png';

const Navbar = ({ changeLocale }) => {
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
      <div>
        <Img src={armFlag} onClick={() => changeLocale('hy')}></Img>
        <Img src={usaFlag} onClick={() => changeLocale('en')}></Img>
      </div>
      <Logout onClick={onLogout}>{formatMessage(localization.logout)}</Logout>
    </NavLinks>
  );

  const favItemLinks = (
    <NavLinks>
      <div>
        <Img src={armFlag} onClick={() => changeLocale('hy')}></Img>
        <Img src={usaFlag} onClick={() => changeLocale('en')}></Img>
      </div>
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

Navbar.propTypes = {
  changeLocale: PropTypes.func.isRequired
};

export default Navbar;
