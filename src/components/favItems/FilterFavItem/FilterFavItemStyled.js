import styled from 'styled-components';

export const Container = styled.div``;

export const customStyles = {
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
