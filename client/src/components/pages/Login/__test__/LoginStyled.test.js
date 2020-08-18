import { renderToJSON } from '../../../../utils/tests';
import theme from '../../../../styles/theme';
import { Container, Input, LoginButton } from '../LoginStyled';

describe('LoginStyled component test with Enzyme', () => {
  test('renders correct style of Container component', () => {
    const tree = renderToJSON(Container, { theme });
    expect(tree).toHaveStyleRule('color', theme.cadetblue);
  });

  test('renders correct style of Input component', () => {
    const tree = renderToJSON(Input, { theme });
    expect(tree).toHaveStyleRule('border-bottom', `1px solid ${theme.cadetblue}`);
  });

  test('renders correct style of LoginButton component', () => {
    const tree = renderToJSON(LoginButton, { theme });
    expect(tree).toHaveStyleRule('background-color', theme.cadetblue);
  });
});
