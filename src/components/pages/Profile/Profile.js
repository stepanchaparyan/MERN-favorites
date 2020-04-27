import React, { useContext, useEffect } from 'react';
import AuthContext from '../../../context/authContext/authContext';
import ProfileContext from '../../../context/profileContext/profileContext';
import ProfileForm from '../ProfileForm/ProfileForm';
import moment from 'moment';
import {
  Container,
  Module,
  WelcomeText,
  LinkStyled,
  Logo,
  LoadingMessage,
  ProfileData,
  TextData,
  Text,
  Data,
  ProfileImage,
  Button,
  ReactTooltipStyled
} from './ProfileStyled';
import Img from '../../../assets/elephant.png';

const Profile = () => {
  const { loadUser } = useContext(AuthContext);
  let { loading, getProfile, profile, edit_Profile, toggle_Form, toggleForm } = useContext(
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
        <WelcomeText>Profile page</WelcomeText>
        {!toggleForm && (
          <>
            <ProfileImage src={Img}></ProfileImage>
            <TextData>
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
            </TextData>
            <ReactTooltipStyled place="right" effect="solid" />
            <Button onClick={toggle}>Edit Card</Button>
          </>
        )}
        {toggleForm && <ProfileForm />}
        <LinkStyled to="/">Go home page</LinkStyled>
        <Logo src={Img}></Logo>
      </Module>
    </Container>
  );
};
export default Profile;
