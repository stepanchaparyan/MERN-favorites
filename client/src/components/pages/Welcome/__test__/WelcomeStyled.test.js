import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { Container, LinkStyled } from '../WelcomeStyled';
import theme from '../../../../styles/theme';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Welcome component test with Enzyme', () => {
  test('renders correct style of Container component', () => {
    const tree = renderer.create(<Container theme={theme} />).toJSON();
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of LinkStyled component', () => {
    const tree = renderer
      .create(
        <Router>
          <LinkStyled theme={theme} />
        </Router>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });
});
