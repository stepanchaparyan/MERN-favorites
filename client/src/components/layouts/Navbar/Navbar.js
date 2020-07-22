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
import { LINK, LANGUAGES } from '../../../constants';

const { ARMENIAN, ENGLISH } = LANGUAGES;

const Navbar = ({ changeLocale }) => {
  const { user, logout, isAuthencated, clearErrors } = useContext(AuthContext);
  const { formatMessage } = useIntl();
  const alt = 'logo';

  const onLogout = () => {
    logout();
    clearErrors();
  };
  const authLinks = (
    <NavLinks>
      {isAuthencated && (
        <LinkStyled to={LINK.TO.PROFILE_PAGE}>
          <UserName>{user && user.name}</UserName>
        </LinkStyled>
      )}
      <div>
        <Img src={armFlag} onClick={() => changeLocale(ARMENIAN)}></Img>
        <Img src={usaFlag} onClick={() => changeLocale(ENGLISH)}></Img>
      </div>
      <Logout onClick={onLogout}>{formatMessage(localization.logout)}</Logout>
    </NavLinks>
  );

  const favItemLinks = (
    <NavLinks>
      <div>
        <Img src={armFlag} onClick={() => changeLocale(LANGUAGES.ARMENIAN)}></Img>
        <Img src={usaFlag} onClick={() => changeLocale(LANGUAGES.ENGLISH)}></Img>
      </div>
      <LinkStyled to={LINK.TO.REGISTER}>{formatMessage(localization.signUp)}</LinkStyled>
      <LinkStyled to={LINK.TO.LOGIN}>{formatMessage(localization.logIn)}</LinkStyled>
    </NavLinks>
  );

  return (
    <Container>
      <Link to={LINK.TO.WELCOME}>
        <Logo src={logo} alt={alt} />
      </Link>
      {isAuthencated ? authLinks : favItemLinks}
    </Container>
  );
};

Navbar.propTypes = {
  changeLocale: PropTypes.func.isRequired
};

export default Navbar;
