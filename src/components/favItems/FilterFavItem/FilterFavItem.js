import React, { useContext, useState } from 'react';
import Select from 'react-select';
import FavItemContext from '../../../context/favItemContext/favItemContext';

const FilterFavItem = () => {
  const { filter_FavItem, clearFilterFavItem } = useContext(FavItemContext);

  const options = [
    { value: 'Movie', label: 'Movie' },
    { value: 'Music', label: 'Music' },
    { value: 'Book', label: 'Book' },
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

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
      padding: 20
    }),
    control: () => ({
      // none of react-select's styles are passed to <Control />
      width: 200,
      display: 'flex'
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return { ...provided, opacity, transition };
    }
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={customStyles}
      />
    </div>
  );
};
export default FilterFavItem;
