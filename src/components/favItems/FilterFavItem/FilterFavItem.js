import React, { useContext, useState } from 'react';
import Select from 'react-select';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import { Container, customStyles } from './FilterFavItemStyled';

const FilterFavItem = () => {
  const { favItems, filter_FavItem, clearFilterFavItem } = useContext(FavItemContext);

  // generate options
  const options = favItems.map(favItem => ({
    value: favItem.category,
    label: favItem.category
  }));

  // 1. create set from favItem.category
  // 2. add null into set
  // 3. create obj using that set

  // const options = [
  //   { value: 'Movie', label: 'Movie' },
  //   { value: 'Music', label: 'Music' },
  //   { value: 'Book', label: 'Book' },
  //   { value: 'null', label: 'All' }
  // ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = selectedOption => {
    if (selectedOption.value === 'null') {
      clearFilterFavItem();
    } else {
      setSelectedOption(selectedOption);
      filter_FavItem(selectedOption.value);
    }
  };

  return (
    <Container>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
      />
    </Container>
  );
};
export default FilterFavItem;
