import React, { useState, useContext, useEffect } from 'react';
import ProfileContext from '../../../context/profileContext/profileContext';
import {
  Container,
  Module,
  ProfileImage,
  Form,
  Input,
  Select,
  Option,
  DefaultOption
} from './ProfileFormStyled';
import Img from '../../../assets/elephant.png';

const ProfileForm = () => {
  const context = useContext(ProfileContext);

  const { updateProfile, editProfile, toggle_Form, toggleForm } = context;

  useEffect(() => {
    setProfile(editProfile);
  }, [context]);

  const [profile, setProfile] = useState({
    name: '',
    surname: '',
    gender: '',
    birthDay: '',
    phone: ''
  });

  const { name, surname, gender, birthDay, phone } = profile;

  const onchange = e => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value
    });
  };

  const onsubmit = e => {
    e.preventDefault();
    updateProfile(profile);
    toggle_Form(!toggleForm);
  };

  const cancelEdit = () => {
    toggle_Form(!toggleForm);
  };

  return (
    <Container>
      <Module>
        <ProfileImage src={Img}></ProfileImage>
        <Form onSubmit={onsubmit}>
          <Input type="text" placeholder="Name" name="name" value={name} onChange={onchange} />
          <Input
            type="text"
            placeholder="Surname"
            name="surname"
            value={surname}
            onChange={onchange}
          />
          <Select value={gender} name="gender" onChange={onchange}>
            <DefaultOption value="Other">Select category</DefaultOption>
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
          <Input
            type="text"
            placeholder="BirthDay"
            name="birthDay"
            value={birthDay}
            onChange={onchange}
          />
          <Input
            type="tel"
            placeholder="123-45-678"
            // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            name="phone"
            value={phone}
            onChange={onchange}
          />
          <Input type="submit" value={'Update'} />
          <Input onClick={cancelEdit} type="button" value="Cancel" />
        </Form>
      </Module>
    </Container>
  );
};
export default ProfileForm;
