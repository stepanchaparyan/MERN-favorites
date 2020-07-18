import React, { useState, useContext, useEffect } from 'react';
import { useIntl } from 'react-intl';
import ProfileContext from '../../../context/profileContext/profileContext';
import {
  Container,
  Module,
  Form,
  Input,
  Select,
  Option,
  DefaultOption,
  ProfileData,
  Text,
  DatePickerStyled
} from './ProfileFormStyled';
import localization from './localization';

const ProfileForm = () => {
  const context = useContext(ProfileContext);
  const { formatMessage } = useIntl();

  const { updateProfile, editProfile, toggle_Form, toggleForm } = context;

  const [newProfile, setProfile] = useState(editProfile);

  useEffect(() => {
    setProfile(editProfile);
  }, [context]);

  const { name, surname, email, gender, birthDay, phoneNumber } = newProfile;

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
        <Form onSubmit={onsubmit}>
          <ProfileData>
            <Text>{formatMessage(localization.name)}:</Text>
            <Input
              type="text"
              placeholder={formatMessage(localization.name)}
              name="name"
              value={name}
              onChange={onchange}
            />
          </ProfileData>
          <ProfileData>
            <Text>{formatMessage(localization.surname)}:</Text>
            <Input
              type="text"
              placeholder={formatMessage(localization.surname)}
              name="surname"
              value={surname}
              onChange={onchange}
            />
          </ProfileData>
          <ProfileData>
            <Text>{formatMessage(localization.email)}:</Text>
            <Input
              type="email"
              placeholder={formatMessage(localization.email)}
              name="email"
              value={email}
              onChange={onchange}
            />
          </ProfileData>
          <ProfileData>
            <Text>{formatMessage(localization.gender)}:</Text>
            <Select value={gender} name="gender" onChange={onchange}>
              <DefaultOption value="Other">
                {formatMessage(localization.selectCategory)}
              </DefaultOption>
              <Option value="male">{formatMessage(localization.male)}</Option>
              <Option value="female">{formatMessage(localization.female)}</Option>
              <Option value="other">{formatMessage(localization.other)}</Option>
            </Select>
          </ProfileData>
          <ProfileData>
            <Text>{formatMessage(localization.birthday)}:</Text>
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
            <Text>{formatMessage(localization.phone)}:</Text>
            <Input
              type="tel"
              placeholder="93123456"
              pattern="[0-9]{8}"
              name="phoneNumber"
              value={phoneNumber}
              onChange={onchange}
            />
          </ProfileData>
          <Input type="submit" value={formatMessage(localization.update)} />
          <Input onClick={cancelEdit} type="button" value={formatMessage(localization.cancel)} />
        </Form>
      </Module>
    </Container>
  );
};
export default ProfileForm;
