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
import { FORM } from '../../../constants';

const { INPUT, SELECT, TEL_PLACEHOLDER, TEL_PATTERN } = FORM;

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
              type={INPUT.TYPE.TEXT}
              placeholder={formatMessage(localization.name)}
              name={INPUT.NAME.NAME}
              value={name}
              onChange={onchange}
            />
          </ProfileData>
          <ProfileData>
            <Text>{formatMessage(localization.surname)}:</Text>
            <Input
              type={INPUT.TYPE.TEXT}
              placeholder={formatMessage(localization.surname)}
              name={INPUT.NAME.SURNAME}
              value={surname}
              onChange={onchange}
            />
          </ProfileData>
          <ProfileData>
            <Text>{formatMessage(localization.email)}:</Text>
            <Input
              type={INPUT.TYPE.EMAIL}
              placeholder={formatMessage(localization.email)}
              name={INPUT.NAME.EMAIL}
              value={email}
              onChange={onchange}
            />
          </ProfileData>
          <ProfileData>
            <Text>{formatMessage(localization.gender)}:</Text>
            <Select value={gender} name={SELECT.NAME.GENDER} onChange={onchange}>
              <DefaultOption value={SELECT.VALUES.OTHER}>
                {formatMessage(localization.selectCategory)}
              </DefaultOption>
              <Option value={SELECT.VALUES.MALE}>{formatMessage(localization.male)}</Option>
              <Option value={SELECT.VALUES.FEMALE}>{formatMessage(localization.female)}</Option>
              <Option value={SELECT.VALUES.OTHER}>{formatMessage(localization.other)}</Option>
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
              type={INPUT.TYPE.TEL}
              placeholder={TEL_PLACEHOLDER}
              pattern={TEL_PATTERN}
              name={INPUT.NAME.PHONE_NUMBER}
              value={phoneNumber}
              onChange={onchange}
            />
          </ProfileData>
          <Input type={INPUT.TYPE.SUBMIT} value={formatMessage(localization.update)} />
          <Input
            onClick={cancelEdit}
            type={INPUT.TYPE.BUTTON}
            value={formatMessage(localization.cancel)}
          />
        </Form>
      </Module>
    </Container>
  );
};
export default ProfileForm;
