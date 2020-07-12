import React, { useContext, useEffect } from 'react';
import { useIntl } from 'react-intl';
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
import localization from './localization';

const Welcome = () => {
  const { formatMessage } = useIntl();
  const { loadUser, isAuthencated } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Module>
        <WelcomeText>{formatMessage(localization.welcomeText)}</WelcomeText>
        <LongText>{formatMessage(localization.longText)}</LongText>
        <LongText>
          <Music>{formatMessage(localization.music)}</Music>
          <Films>{formatMessage(localization.films)}</Films>
          <Books>{formatMessage(localization.books)}</Books>
          <Other>{formatMessage(localization.other)}</Other>
        </LongText>
        {isAuthencated && (
          <LinkStyled to="/home">{formatMessage(localization.createYourCard)}</LinkStyled>
        )}
        <Logo src={Img}></Logo>
      </Module>
    </Container>
  );
};

export default Welcome;
