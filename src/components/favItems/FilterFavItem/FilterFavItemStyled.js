import styled from 'styled-components';

export const Container = styled.div`
  & div {
    color: cadetblue;
    font-size: 18px;
  }
`;

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'black' : 'cadetblue',
    backgroundColor: state.isSelected ? 'lightGray' : 'white',
    padding: 8,
    fontSize: 16
  }),
  control: () => ({
    width: 200,
    display: 'flex'
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';

    return { ...provided, opacity, transition };
  }
};
