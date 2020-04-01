import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: cadetblue;
  z-index: 1;
  position: absolute;
  background-color: darkmagenta;
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  border-radius: 4px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 32px;
  font-weight: 600;
  font-size: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: 0px;
  border-bottom: 1px solid cadetblue;
  width: 30%;
  padding: 7px 10px;
  margin: 2px;
  outline: none;

  &[type='submit'] {
    width: 20%;
    border: 0;
    background-color: cadetblue;
    font-weight: 600;
    font-size: 16px;
    margin-top: 20px;
    border-radius: 3%;
    cursor: pointer;
  }
`;

export const Errors = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
`;

export const ErrorButton = styled.button`
  color: red;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;
