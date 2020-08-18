import React from 'react';
import { renderSnapshot } from '../../../../utils/tests';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import ProfileForm from '../ProfileForm.js';
import { Form, DatePickerStyled, Input, CancelButton } from '../ProfileFormStyled';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useEffect: jest.fn().mockImplementation(f => f),
    useContext: jest.fn(() => ({
      editProfile: {
        name: 'testName',
        surname: 'testSurname',
        email: 'test@email.com',
        gender: 'testGender',
        birthDay: 'testBirtday',
        phoneNumber: '123456789'
      },
      toggle_Form: jest.fn(),
      updateProfile: jest.fn()
    }))
  };
});

describe('ProfileForm component test with Enzyme', () => {
  test('renders snapshot', () => {
    renderSnapshot(ProfileForm);
  });

  test('should click on Input elements', () => {
    const component = shallow(<ProfileForm />);
    const inputs = component.find(Input);
    inputs.forEach(input => {
      input.simulate('change', { target: { value: 'target' } });
      expect();
    });
  });

  test('should click on Form element', () => {
    const component = shallow(<ProfileForm />);
    const form = component.find(Form);
    const preventDefault = jest.fn();
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });

  test('should click on DatePicker element', () => {
    const component = shallow(<ProfileForm />);
    const datePicker = component.find(DatePickerStyled);
    datePicker.simulate('change');
  });

  test('should click on CancelButton element', () => {
    const component = shallow(<ProfileForm />);
    const cancelButton = component.find(CancelButton);
    cancelButton.simulate('click');
  });
});
