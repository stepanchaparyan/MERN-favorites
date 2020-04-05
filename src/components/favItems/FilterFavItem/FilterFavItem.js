import React, { useContext, useState } from 'react';
import Select from 'react-select';
import FavItemContext from '../../../context/favItemContext/favItemContext';
import { Container, customStyles } from './FilterFavItemStyled';

const FilterFavItem = () => {
  const { filter_FavItem, clearFilterFavItem } = useContext(FavItemContext);

  const options = [
    { value: 'Movie', label: 'Movie' },
    { value: 'Music', label: 'Music' },
    { value: 'Books', label: 'Books' },
    { value: 'Other', label: 'Other' },
    { value: 'null', label: 'All' }
  ];

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
        placeholder="Filter your cards"
      />
    </Container>
  );
};
export default FilterFavItem;
