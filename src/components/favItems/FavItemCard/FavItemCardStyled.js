import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  min-width: 250px;
  border: 1px solid cadetblue;
  background-color: WhiteSmoke;
  color: black;
  font-size: 16px;
  margin: 5px;
`;

export const Info = styled.div`
  display: flex;
  margin-left: 8px;
`;

export const InfoName = styled.div`
  width: 50%;
  padding: 10px 0;
`;

export const InfoData = styled.div`
  padding: 10px 0;
  color: ${props => (props.color ? props.color : 'cadetblue')};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 120px;
`;

export const Button = styled.button`
  border: 0px;
  padding: 4px 0;
  outline: none;
  background-color: cadetblue;
  font-size: 16px;
  margin-top: 5px;
  cursor: pointer;
`;
