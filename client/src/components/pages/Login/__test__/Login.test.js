import React, { useContext } from 'react';
import { renderSnapshot } from '../../../../utils/tests';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Login from '../Login.js';
import { Input, Form, ErrorButton } from '../LoginStyled';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useEffect: jest.fn().mockImplementation(f => f()),
    useContext: jest.fn(() => ({
      isAuthencated: false,
      user: { name: 'testName' },
      error: ['a', 'b'],
      login: jest.fn(),
      clearErrors: jest.fn()
    }))
  };
});

describe('Login component test with Enzyme', () => {
  test('renders snapshot', () => {
    renderSnapshot(Login);
  });

  test('should click on Input elements', () => {
    const component = shallow(<Login />);
    const inputs = component.find(Input);
    inputs.forEach(input => {
      input.simulate('change', { target: { value: 'target' } });
    });
  });

  test('should click on Form elements', () => {
    const component = shallow(<Login />);
    const form = component.find(Form);
    const preventDefault = jest.fn();
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });

  test('should click on errorButton elements', () => {
    const component = shallow(<Login />);
    const errorButtons = component.find(ErrorButton);
    errorButtons.forEach(errorButton => {
      errorButton.simulate('click');
    });
  });

  test('should click on errorButton elements when error is not an array', () => {
    useContext.mockImplementation(
      jest.fn(() => ({
        isAuthencated: false,
        user: { name: 'testName' },
        error: 'a',
        login: jest.fn(),
        clearErrors: jest.fn()
      }))
    );
    const component = shallow(<Login />);
    const errorButtons = component.find(ErrorButton);
    errorButtons.forEach(errorButton => {
      errorButton.simulate('click');
    });
  });
});
