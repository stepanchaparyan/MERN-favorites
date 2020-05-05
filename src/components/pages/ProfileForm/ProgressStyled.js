import styled from 'styled-components';

export const Container = styled.div`
  background-color: lightGray;
  height: 14px;
  width: 100px;
  margin-left: 4px;
`;

export const ProgressBar = styled.div`
  background-color: ${props => props.theme.color};
  color: black;
  width: ${props => `${props.width}px`};
  font-size: 12px;
  height: 14px;
  text-align: center;
`;
