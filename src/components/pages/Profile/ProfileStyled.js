import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.color};
  padding: 0 32px 50px 32px;
  font-weight: 600;
  font-size: 24px;
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
  width: 85%;
  background-color: lightgray;
  border-radius: 4px;
  padding: 16px;
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

export const Button = styled.button`
  border: 0;
  padding: 6px 0;
  outline: none;
  background-color: cadetblue;
  font-size: 18px;
  margin-top: 24px;
  cursor: pointer;
  width: 40%;
  font-weight: 600;
  border-radius: 4%;
`;

export const ReactTooltipStyled = styled(ReactTooltip)`
  padding: 4px 6px;
  border-radius: 6px;
`;
