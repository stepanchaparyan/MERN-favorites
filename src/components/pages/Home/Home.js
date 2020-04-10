import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import FavItemsList from '../../favItems/FavItemsList/FavItemsList';
import FilterAndSearch from '../../favItems/FilterAndSearch/FilterAndSearch';
import FavItemStat from '../../favItems/FavItemStat/FavItemStat';
import {
  Container,
  Module,
  Info,
  FilterAndSearchContainer,
  FavItemStatContainer
} from './HomeStyled';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Module>
        <Info>
          <FilterAndSearchContainer>
            <FilterAndSearch />
          </FilterAndSearchContainer>
          <FavItemStatContainer>
            <FavItemStat />
          </FavItemStatContainer>
        </Info>
        <FavItemsList />
      </Module>
    </Container>
  );
};
export default Home;
