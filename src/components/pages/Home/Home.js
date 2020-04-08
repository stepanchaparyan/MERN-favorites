import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Module, Info, Filter_Search, FavItemStatContainer } from './HomeStyled';
import FavItemsList from '../../favItems/FavItemsList/FavItemsList';
import SearchFavItem from '../../favItems/SearchFavItem/SearchFavItem';
import FilterFavItem from '../../favItems/FilterFavItem/FilterFavItem';
import FavItemStat from '../../favItems/FavItemStat/FavItemStat';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Module>
        <Info>
          <Filter_Search>
            <SearchFavItem />
            <FilterFavItem />
          </Filter_Search>
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
