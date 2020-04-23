import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.color};
  padding: 0 32px 50px 32px;
  font-weight: 600;
  font-size: 24px;
  background-color: lightgray;
  border-radius: 4px;
`;

export const Module = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  width: 50%;
`;

export const WelcomeText = styled.div`
  font-size: 40px;
  padding: 16px;
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.color};
  margin: 32px;
  text-decoration: none;
  font-size: 32px;
`;

export const Logo = styled.img`
  height: 200px;
  position: absolute;
  bottom: 80px;
  right: 60px;
`;

export const LoadingMessage = styled.h3`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.color};
`;

export const TextData = styled.div`
  background: whiteSmoke;
  border: 1px solid cadetBlue;
  width: 85%;
`;

export const ProfileData = styled.div`
  display: flex;
  font-size: 20px;
  padding: 8px;
  width: 100%;
`;

export const Text = styled.div`
  color: black;
  width: 45%;
`;

export const Data = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 200px;
  width: 50%;
`;

export const ProfileImage = styled.img`
  height: 50px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  border: 0px;
  width: 200px;
  padding: 8px 10px;
  margin: 4px;
  outline: none;
  border-radius: 4px;

  &[type='submit'] {
    width: 50%;
    border: 0;
    background-color: ${props => props.theme.color};
    font-weight: 600;
    font-size: 16px;
    margin-top: 20px;
    border-radius: 5%;
    cursor: pointer;
    margin-bottom: 10px;
  }

  &[type='button'] {
    width: 35%;
    border: 0;
    background-color: gray;
    font-weight: 600;
    font-size: 16px;
    border-radius: 5%;
    cursor: pointer;
    margin-bottom: 10px;
  }
`;

export const Select = styled.select`
  width: 220px;
  background: white;
  height: 32px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding-left: 5px;
  margin: 4px;
`;

export const Option = styled.option`
  color: black;
  height: 47px;
  padding: 20px;
  font-size: 18px;
  color: ${props => props.theme.color};
`;

export const DefaultOption = styled.option`
  display: none;
`;
