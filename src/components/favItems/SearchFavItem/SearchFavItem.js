import React, { useRef, useContext } from 'react';
import FavItemContext from '../../../context/favItemContext/favItemContext';

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
    <div>
      <input
        ref={favItem}
        onChange={onchange}
        type="text"
        placeholder="Search FavItem by name..."
        className="search"
      />
      <i className="fas fa-search search-icon" />
    </div>
  );
};
export default SearchFavItem;
