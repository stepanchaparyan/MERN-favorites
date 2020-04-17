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

const Welcome = () => {
  const { loadUser, isAuthencated } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Module>
        <WelcomeText>Welcome to our page</WelcomeText>
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
