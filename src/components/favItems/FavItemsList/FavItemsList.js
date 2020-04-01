import React, { useContext, useEffect } from 'react';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import FavItemCard from '../FavItemCard/FavItemCard';
import FavItemForm from '../FavItemForm/FavItemForm';
import { Container, CardContainer, Button } from './FavItemsListStyled';

const FavItemsList = () => {
  const context = useContext(FavItemContext);
  const { loading, toggle_Form, toggleForm, clearEdit, favItems, getFavItems } = context;

  useEffect(() => {
    getFavItems();
  }, []);

  const toggleFormStatus = () => {
    clearEdit();
    toggle_Form(!toggleForm);
  };

  if (favItems === null || favItems.length === 0) {
    return <h3>{loading ? 'Loading favItems...' : 'Please add a guest'}</h3>;
  }

  return (
    <Container>
      <Button onClick={toggleFormStatus}>Add new Item</Button>
      <CardContainer>
        {favItems.map(item => (
          <FavItemCard favItem={item} key={item._id} />
        ))}
      </CardContainer>
      {toggleForm && <FavItemForm />}
    </Container>
  );
};
export default FavItemsList;
