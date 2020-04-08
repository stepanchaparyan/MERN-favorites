import React, { useRef, useContext } from 'react';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import { Container, Input } from './SearchFavItemStyled';

const SearchFavItem = () => {
  const { search_FavItem, clearSearchFavItem } = useContext(FavItemContext);
  const favItem = useRef('');
  const onchange = e => {
    if (favItem.current.value !== '') {
      search_FavItem(e.target.value);
    } else {
      clearSearchFavItem();
    }
  };
  return (
    <Container>
      <Input
        ref={favItem}
        onChange={onchange}
        type="text"
        placeholder="Search FavItem by name..."
      />
    </Container>
  );
};
export default SearchFavItem;
