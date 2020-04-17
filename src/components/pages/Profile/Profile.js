import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Module, WelcomeText, LinkStyled, Logo } from './ProfileStyled';
import Img from '../../../assets/elephant.png';

const Profile = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Module>
        <WelcomeText>Profile page</WelcomeText>
        <LinkStyled to="/">Go home page</LinkStyled>
        <Logo src={Img}></Logo>
      </Module>
    </Container>
  );
};
export default Profile;
