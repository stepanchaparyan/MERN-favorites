import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Module, Search_Filter } from './HomeStyled';
import FavItemsList from '../../favItems/FavItemsList/FavItemsList';
import SearchFavItem from '../../favItems/SearchFavItem/SearchFavItem';
import FilterFavItem from '../../favItems/FilterFavItem/FilterFavItem';

const Home = () => {
  const { loadUser } = useContext(AuthContext);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <Container>
      <Module>
        <Search_Filter>
          <FilterFavItem />
          <SearchFavItem />
        </Search_Filter>
        <FavItemsList />
      </Module>
    </Container>
  );
};
export default Home;
