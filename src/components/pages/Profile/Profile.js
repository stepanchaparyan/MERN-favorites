import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import ProfileContext from '../../../context/profileContext/profileContext';
import ProfileForm from '../ProfileForm/ProfileForm';
import FileUpload from '../ProfileForm/FileUpload';
import Message from '../ProfileForm/Message';
import moment from 'moment';
import {
  Container,
  Module,
  WelcomeText,
  LinkStyled,
  Logo,
  LoadingMessage,
  ProfileData,
  Info,
  InfoData,
  Text,
  Data,
  ProfileImage,
  Button,
  ReactTooltipStyled,
  Forms
} from './ProfileStyled';
import Img from '../../../assets/elephant.png';

const Profile = () => {
  const { loadUser } = useContext(AuthContext);
  let { loading, getProfile, profile, edit_Profile, toggle_Form, toggleForm, message } = useContext(
    ProfileContext
  );

  useEffect(() => {
    loadUser();
    getProfile();
  }, []);

  if (profile === null || profile.length === 0 || profile === undefined) {
    return (
      <LoadingMessage>{loading ? 'Loading profile...' : 'Please add a profile'}</LoadingMessage>
    );
  }

  profile = profile[0];

  const toggle = () => {
    edit_Profile(profile);
    toggle_Form(!toggleForm);
  };

  return (
    <Container>
      <Module>
        {message ? <Message msg={message} /> : null}
        <WelcomeText>Profile page</WelcomeText>
        {!toggleForm && (
          <>
            <Info>
              <ProfileImage src={require(`../../../assets/${profile.image}`)} />
              <InfoData>
                <ProfileData>
                  <Text>Name:</Text>
                  <Data>{profile.name}</Data>
                </ProfileData>
                <ProfileData>
                  <Text>Surname:</Text>
                  <Data>{profile.surname}</Data>
                </ProfileData>
                <ProfileData>
                  <Text>Email:</Text>
                  <Data
                    data-tip={profile.email}
                    data-arrow-color="cadetblue"
                    data-background-color="cadetblue"
                  >
                    {profile.email}
                  </Data>
                </ProfileData>
                <ProfileData>
                  <Text>Gender:</Text>
                  <Data>{profile.gender}</Data>
                </ProfileData>
                <ProfileData>
                  <Text>BirthDay:</Text>
                  <Data>{moment(profile.birthDay).format('ll')}</Data>
                </ProfileData>
                <ProfileData>
                  <Text>Phone:</Text>
                  <Data>{profile.phone}</Data>
                </ProfileData>
              </InfoData>
            </Info>
            <ReactTooltipStyled place="right" effect="solid" />
            <Button onClick={toggle}>Edit Card</Button>
          </>
        )}
        <Forms>
          {toggleForm && <FileUpload />}
          {toggleForm && <ProfileForm />}
        </Forms>
        <LinkStyled to="/">Go home page</LinkStyled>
        <Logo src={Img}></Logo>
      </Module>
    </Container>
  );
};
export default Profile;
