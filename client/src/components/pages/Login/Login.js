import React, { useState, useContext, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Title, Form, Input, Errors, QuestionText, ErrorButton } from './LoginStyled';
import localization from './localization';

const Login = props => {
  const { login, isAuthencated, error, clearErrors } = useContext(AuthContext);
  const { formatMessage } = useIntl();

  useEffect(() => {
    if (isAuthencated) {
      props.history.push('/');
      clearErrors();
    } else {
      clearErrors();
    }
  }, [isAuthencated, props.history]);

  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const { email, password } = user;

  const onchange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
    if (error !== null) {
      clearErrors();
    }
  };
  const onsubmit = e => {
    e.preventDefault();
    login({
      email,
      password
    });
    clearErrors();
  };

  return (
    <Container>
      <Title>{formatMessage(localization.login)}</Title>
      <Form onSubmit={onsubmit}>
        <Input
          type="email"
          name="email"
          placeholder={formatMessage(localization.email)}
          value={email}
          onChange={onchange}
          required
        />
        <Input
          type="password"
          name="password"
          placeholder={formatMessage(localization.password)}
          value={password}
          onChange={onchange}
          required
        />
        <Input type="submit" value={formatMessage(localization.login)} />
      </Form>
      {error !== null && (
        <Errors>
          {!Array.isArray(error) ? (
            <ErrorButton type="button" onClick={() => clearErrors()}>
              {error}
            </ErrorButton>
          ) : (
            error.map(err => (
              <ErrorButton key={err.msg} type="button" onClick={() => clearErrors()}>
                {err.msg}
              </ErrorButton>
            ))
          )}
        </Errors>
      )}
      <QuestionText>
        {formatMessage(localization.dontHaveAnAccout)} &nbsp;
        <Link to="/register">{formatMessage(localization.signup)}</Link>
      </QuestionText>
    </Container>
  );
};

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
