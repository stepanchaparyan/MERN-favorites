import React from 'react';
import { shallow } from 'enzyme';
import NotFound from '../PageNotFound.js';

jest.mock('react-intl', () => ({
  useIntl: jest.fn(() => ({ formatMessage: m => m.defaultMessage })),
  defineMessages: i => i
}));

describe('NotFound component test with Enzyme', () => {
  test('renders without crashing', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();
  });
});
