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
  width: 60%;
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

export const Info = styled.div`
  display: flex;
  background-color: #f8f8f8;
  border-radius: 4px;
  padding: 16px;
  width: 100%;
`;

export const InfoData = styled.div`
  width: 100%;
  padding: 16px;
`;

export const ProfileData = styled.div`
  display: flex;
  font-size: 20px;
  padding: 8px;
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
  width: 55%;
`;

export const ImageContainer = styled.div`
  align-self: center;
`;

export const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  align-self: center;
  padding: 0 24px;
`;

export const Button = styled.button`
  border: 0;
  padding: 6px 0;
  outline: none;
  background-color: ${props => props.theme.color};
  font-size: 18px;
  margin-top: 24px;
  cursor: pointer;
  width: 40%;
  font-weight: 600;
  border-radius: 3%;
`;

export const ReactTooltipStyled = styled(ReactTooltip)`
  padding: 4px 6px;
  border-radius: 6px;
`;

export const Forms = styled.div`
  display: flex;
`;
