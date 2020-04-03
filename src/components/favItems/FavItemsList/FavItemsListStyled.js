import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const CardContainer = styled.div`
  display: flex;
  margin-top: 16px;
  flex-flow: wrap;
`;

export const Button = styled.button`
  align-items: center;
  border: 0px;
  padding: 10px;
  outline: none;
  background-color: cadetblue;
  font-size: 16px;
  margin-top: 20px;
  cursor: pointer;
  width: 50%;
  border-radius: 3px;
  align-self: center;
  font-weight: 600;
`;