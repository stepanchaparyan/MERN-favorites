import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import { Container, Info, InfoName, InfoData, Button } from './FavItemCardStyled';

const FavItemCard = ({ favItem }) => {
  const { removeFavItem, edit_FavItem, clearEdit, toggle_Form, toggleForm } = useContext(
    FavItemContext
  );
  const { _id, author, title, category, description } = favItem;

  const handleRemove = () => {
    removeFavItem(_id);
    clearEdit();
  };

  const toggle = () => {
    edit_FavItem(favItem);
    toggle_Form(!toggleForm);
  };

  const colorPicker = () => {
    let color;
    switch (category) {
      case 'Movie':
        color = 'red';
        break;
      case 'Music':
        color = 'Navy';
        break;
      case 'Books':
        color = 'Green';
        break;
      case 'Other':
        color = 'Indigo';
        break;
      default:
        color = 'black';
    }
    return color;
  };

  return (
    <Container>
      <Info>
        <InfoName>Author: </InfoName>
        <InfoData>{author}</InfoData>
      </Info>
      <Info>
        <InfoName>Title: </InfoName>
        <InfoData>{title}</InfoData>
      </Info>
      <Info>
        <InfoName>Category: </InfoName>
        <InfoData color={colorPicker()}>{category}</InfoData>
      </Info>
      <Info>
        <InfoName>Description: </InfoName>
        <InfoData>{description}</InfoData>
      </Info>
      <Button onClick={toggle}>Edit Card</Button>
      <Button onClick={handleRemove}>Remove Card</Button>
    </Container>
  );
};

FavItemCard.propTypes = {
  favItem: PropTypes.object.isRequired
};

export default FavItemCard;
