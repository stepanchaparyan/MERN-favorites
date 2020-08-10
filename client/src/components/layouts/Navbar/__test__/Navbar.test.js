import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../Navbar.js';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

jest.mock('react', () => {
  const ActualReact = jest.requireActual('react');
  return {
    ...ActualReact,
    useContext: () => ({ isAuthencated: true, user: { name: 'testName' } })
  };
});

describe('Navbar component test with Enzyme', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
