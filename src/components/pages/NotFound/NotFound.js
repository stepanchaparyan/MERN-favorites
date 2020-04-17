import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Module, PageNotFoundText, LinkStyled, Logo } from './NotFoundStyled';
import Img from '../../../assets/elephant.png';

const NotFound = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Module>
        <PageNotFoundText>Page not found</PageNotFoundText>
        <LinkStyled to="/">Go Home page</LinkStyled>
        <Logo src={Img}></Logo>
      </Module>
    </Container>
  );
};
export default NotFound;
