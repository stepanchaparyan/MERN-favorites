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
  DefaultOption,
  ProfileData,
  Text,
  DatePickerStyled
} from './ProfileFormStyled';
import Img from '../../../assets/elephant.png';

const ProfileForm = () => {
  const context = useContext(ProfileContext);

  const { updateProfile, editProfile, toggle_Form, toggleForm } = context;

  const [newProfile, setProfile] = useState(editProfile);

  useEffect(() => {
    setProfile(editProfile);
  }, [context]);

  const { name, surname, email, gender, birthDay, phone } = newProfile;

  const [birthDate, setBirthDate] = useState(Date.parse(birthDay));

  const setNewDate = date => {
    setBirthDate(date);
    setProfile({
      ...newProfile,
      birthDay: date
    });
  };

  const onchange = e => {
    setProfile({
      ...newProfile,
      [e.target.name]: e.target.value
    });
  };

  const onsubmit = e => {
    e.preventDefault();
    updateProfile(newProfile);
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
          <ProfileData>
            <Text>Name:</Text>
            <Input type="text" placeholder="Name" name="name" value={name} onChange={onchange} />
          </ProfileData>
          <ProfileData>
            <Text>Surname:</Text>
            <Input
              type="text"
              placeholder="Surname"
              name="surname"
              value={surname}
              onChange={onchange}
            />
          </ProfileData>
          <ProfileData>
            <Text>Email:</Text>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onchange}
            />
          </ProfileData>
          <ProfileData>
            <Text>Gender:</Text>
            <Select value={gender} name="gender" onChange={onchange}>
              <DefaultOption value="Other">Select category</DefaultOption>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </ProfileData>
          <ProfileData>
            <Text>BirthDay:</Text>
            <DatePickerStyled
              selected={birthDate}
              onChange={date => setNewDate(date)}
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </ProfileData>
          <ProfileData>
            <Text>Phone:</Text>
            <Input
              type="tel"
              placeholder="93123456"
              pattern="[0-9]{8}"
              name="phone"
              value={phone}
              onChange={onchange}
            />
          </ProfileData>
          <Input type="submit" value={'Update'} />
          <Input onClick={cancelEdit} type="button" value="Cancel" />
        </Form>
      </Module>
    </Container>
  );
};
export default ProfileForm;
