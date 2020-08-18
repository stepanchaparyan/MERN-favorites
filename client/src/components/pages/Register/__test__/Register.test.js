import React, { useContext } from 'react';
import { renderSnapshot } from '../../../../utils/tests';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Register from '../Register.js';
import { Input, Form, ErrorButton } from '../RegisterStyled';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useEffect: jest.fn().mockImplementation(f => f()),
    useContext: jest.fn().mockImplementation(() => ({
      isAuthencated: false,
      error: 'a',
      clearErrors: jest.fn(),
      register: jest.fn()
    }))
  };
});

describe('Register component test with Enzyme', () => {
  test('renders snapshot', () => {
    renderSnapshot(Register);
  });

  test('should click on Input elements', () => {
    const component = shallow(<Register />);
    const inputs = component.find(Input);
    inputs.forEach(input => {
      input.simulate('change', { target: { value: 'target' } });
    });
  });

  test('should click on Form elements', () => {
    const component = shallow(<Register />);
    const form = component.find(Form);
    const preventDefault = jest.fn();
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });

  test('should click on errorButton elements', () => {
    const component = shallow(<Register />);
    const errorButton = component.find(ErrorButton);
    errorButton.simulate('click');
  });

  test('should click on errorButton elements with errors list', () => {
    useContext.mockImplementationOnce(
      jest.fn(() => ({
        error: ['a', 'b'],
        clearErrors: jest.fn()
      }))
    );

    const component = shallow(<Register />);
    const errorButton = component.find(ErrorButton).at(0);
    errorButton.simulate('click');
  });
});
