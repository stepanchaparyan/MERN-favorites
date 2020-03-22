import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: cadetblue;
  padding: 16px 32px;
  font-weight: 600;
  font-size: 20px;
`;

export const Logo = styled.img`
  width: 40px;
  height: auto;
`;

export const AuthLinks = styled.div`
  display: flex;
  & > div {
    padding: 0 10px;
  } 
  & > div:hover {
    color: black;
  }
`;

export const GuestLinks = styled.div`
  display: flex;
  & > a {
    color: black;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    padding: 0 10px;
  }
  & > a:hover {
    color: white;
  }
`;

export const UserName = styled.div`
  font-weight: 200;
`;

export const Logout = styled.div`
  color: white;
  cursor: pointer;
`;
