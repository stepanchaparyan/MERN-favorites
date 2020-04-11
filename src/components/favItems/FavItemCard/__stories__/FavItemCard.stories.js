import React from 'react';
import { storiesOf } from '@storybook/react';
import FavItemCard from '../FavItemCard';
import FavItemState from '../../../../context/favItemContext/favItemState';

const favItem = {
  _id: '123456789',
  author: 'Stepan',
  title: 'Dogvill',
  category: 'Film',
  description: 'Lars von Trier'
};

const Wrapper = () => {
  return (
    <FavItemState>
      <FavItemCard favItem={favItem} />
    </FavItemState>
  );
};

storiesOf('FavItemCard', module).add('should render component with default props', () => (
  <Wrapper />
));
