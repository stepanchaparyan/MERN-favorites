import React, { useContext, useEffect } from 'react';
import { useIntl } from 'react-intl';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Module, PageNotFoundText, LinkStyled, Logo } from './PageNotFoundStyled';
import Img from '../../../assets/elephant.png';
import localization from './localization';
import { LINK } from '../../../constants';

const NotFound = () => {
  const { loadUser } = useContext(AuthContext);
  const { formatMessage } = useIntl();

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Module>
        <PageNotFoundText>{formatMessage(localization.pageNotFound)}</PageNotFoundText>
        <LinkStyled to={LINK.TO.WELCOME}>{formatMessage(localization.goHomePage)}</LinkStyled>
        <Logo src={Img}></Logo>
      </Module>
    </Container>
  );
};
export default NotFound;
