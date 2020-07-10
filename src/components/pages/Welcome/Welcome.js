import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import {
  Container,
  Module,
  WelcomeText,
  LongText,
  LinkStyled,
  Logo,
  Music,
  Films,
  Books,
  Other
} from './WelcomeStyled';
import Img from '../../../assets/elephant.png';
import { useIntl } from 'react-intl';
import localization from './localization';

const Welcome = () => {
  const intl = useIntl();
  const { loadUser, isAuthencated } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Module>
        <WelcomeText>{intl.formatMessage(localization.welcomeText)}</WelcomeText>
        <LongText>Here you can add and save cards about your favorite</LongText>
        <LongText>
          <Music>Music</Music>
          <Films>Films</Films>
          <Books>Books</Books>
          <Other>Other</Other>
        </LongText>
        {isAuthencated && <LinkStyled to="/home">Create your cards</LinkStyled>}
        <Logo src={Img}></Logo>
      </Module>
    </Container>
  );
};

export default Welcome;
