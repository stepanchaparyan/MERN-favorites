import React, { useContext, useEffect } from 'react';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import FavItemCard from '../FavItemCard/FavItemCard';
import FavItemForm from '../FavItemForm/FavItemForm';
import { Container, CardContainer, Button, LoadingMessage } from './FavItemsListStyled';

const FavItemsList = () => {
  const context = useContext(FavItemContext);
  const {
    loading,
    toggle_Form,
    toggleForm,
    clearEdit,
    favItems,
    getFavItems,
    filterFavItems,
    searchFavItem,
    searchFilterFavItems
  } = context;

  useEffect(() => {
    getFavItems();
  }, []);

  const toggleFormStatus = () => {
    clearEdit();
    toggle_Form(!toggleForm);
  };

  if (favItems === null || favItems.length === 0) {
    return (
      <LoadingMessage>{loading ? 'Loading favItems...' : 'Please add a favItem'}</LoadingMessage>
    );
  }

  return (
    <Container>
      <Button onClick={toggleFormStatus}>Add new Item</Button>

      {!filterFavItems && !searchFavItem ? (
        <CardContainer opacity={toggleForm}>
          {favItems.map(favItem => (
            <FavItemCard key={favItem._id} favItem={favItem} />
          ))}
        </CardContainer>
      ) : searchFilterFavItems ? (
        <CardContainer>
          {searchFilterFavItems.map(favItem => (
            <FavItemCard key={favItem._id} favItem={favItem} />
          ))}
        </CardContainer>
      ) : (
        <>
          <CardContainer>
            {searchFavItem &&
              searchFavItem.map(favItem => <FavItemCard favItem={favItem} key={favItem._id} />)}
          </CardContainer>
          <CardContainer>
            {filterFavItems &&
              filterFavItems.map(favItem => <FavItemCard favItem={favItem} key={favItem._id} />)}
          </CardContainer>
        </>
      )}

      {toggleForm && <FavItemForm />}
    </Container>
  );
};
export default FavItemsList;
