import React, { useContext } from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import { renderSnapshot } from '../../../../utils/tests';
import FavItemForm from '../FavItemForm.js';
import { Form, CancelButton, Input, ErrorButton, Select } from '../FavItemFormStyled';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: jest.fn().mockImplementation(() => ({
      onSubmit: jest.fn(),
      update_FavItem: jest.fn(),
      error: 'a',
      clearErrors: jest.fn()
    }))
  };
});

describe('FavItemForm component test with Enzyme', () => {
  test('renders correct snapshot', () => {
    renderSnapshot(FavItemForm);
  });

  test('render submit on Form component', () => {
    const component = shallow(<FavItemForm />);
    const form = component.find(Form);

    const preventDefault = jest.fn();
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();
  });

  test('render submit on Form component when editFavitem is true', () => {
    useContext.mockImplementationOnce(
      jest.fn(() => ({
        editFavItem: {},
        clearEdit: jest.fn(),
        toggle_Form: jest.fn(),
        update_FavItem: jest.fn()
      }))
    );

    const component = shallow(<FavItemForm />);

    const cancelButton = component.find(CancelButton);
    cancelButton.simulate('click');

    const form = component.find(Form);
    const preventDefault = jest.fn();
    form.simulate('submit', { preventDefault });
    expect(preventDefault).toHaveBeenCalled();

    expect(component).toMatchSnapshot();
  });
});

test('render change on Input component', () => {
  useContext.mockImplementationOnce(
    jest.fn(() => ({
      editFavItem: {},
      clearEdit: jest.fn(),
      toggle_Form: jest.fn(),
      update_FavItem: jest.fn(),
      clearErrors: jest.fn()
    }))
  );

  const component = shallow(<FavItemForm />);

  const inputs = component.find(Input);
  inputs.forEach(input => {
    input.simulate('change', { target: { value: 'target' } });
  });

  const select = component.find(Select);
  select.simulate('change', { target: { value: 'target' } });

  expect(component).toMatchSnapshot();
});

test('render click on ErrorButton when error is not array', () => {
  const component = shallow(<FavItemForm />);

  const errorButtons = component.find(ErrorButton);
  errorButtons.forEach(errorButton => {
    errorButton.simulate('click');
  });
  expect(component).toMatchSnapshot();
});

test('render click on ErrorButton when error is array', () => {
  useContext.mockImplementationOnce(
    jest.fn(() => ({
      editFavItem: {},
      clearEdit: jest.fn(),
      toggle_Form: jest.fn(),
      update_FavItem: jest.fn(),
      clearErrors: jest.fn(),
      error: ['a', 'b']
    }))
  );

  const component = shallow(<FavItemForm />);

  const errorButtons = component.find(ErrorButton);
  errorButtons.forEach(errorButton => {
    errorButton.simulate('click');
  });
  expect(component).toMatchSnapshot();
});
