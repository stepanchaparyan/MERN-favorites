import React from 'react';
import Footer from '../Footer.js';
import { shallow } from 'enzyme';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

describe('Footer component test with Enzyme', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});
