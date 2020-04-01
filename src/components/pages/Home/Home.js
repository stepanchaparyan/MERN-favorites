import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import { Container } from './HomeStyled';
import FavItemsList from '../../favItems/FavItemsList/FavItemsList';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <FavItemsList />
    </Container>
  );
};
export default Home;
