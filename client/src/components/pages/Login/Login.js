import React, { useState, useContext, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authContext/authContext';
import {
  Container,
  Title,
  Form,
  Input,
  LoginButton,
  Errors,
  QuestionText,
  ErrorButton
} from './LoginStyled';
import localization from './localization';
import { FORM, LINK } from '../../../constants';

const { INPUT } = FORM;

const Login = props => {
  const { login, isAuthencated, error, clearErrors } = useContext(AuthContext);
  const { formatMessage } = useIntl();

  useEffect(() => {
    if (isAuthencated) {
      props.history.push(LINK.TO.WELCOME);
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
      <Form onSubmit={e => onsubmit(e)}>
        <Input
          type={INPUT.TYPE.EMAIL}
          name={INPUT.NAME.EMAIL}
          placeholder={formatMessage(localization.email)}
          value={email}
          onChange={e => onchange(e)}
          required
        />
        <Input
          type={INPUT.TYPE.PASSWORD}
          name={INPUT.NAME.PASSWORD}
          placeholder={formatMessage(localization.password)}
          value={password}
          onChange={e => onchange(e)}
          required
        />
        <LoginButton>{formatMessage(localization.login)}</LoginButton>
      </Form>
      {error !== null && (
        <Errors>
          {!Array.isArray(error) ? (
            <ErrorButton type={INPUT.TYPE.BUTTON} onClick={() => clearErrors()}>
              {error}
            </ErrorButton>
          ) : (
            error.map(err => (
              <ErrorButton key={err.msg} type={INPUT.TYPE.BUTTON} onClick={() => clearErrors()}>
                {err.msg}
              </ErrorButton>
            ))
          )}
        </Errors>
      )}
      <QuestionText>
        {formatMessage(localization.dontHaveAnAccout)} &nbsp;
        <Link to={LINK.TO.REGISTER}>{formatMessage(localization.signup)}</Link>
      </QuestionText>
    </Container>
  );
};

Login.propTypes = {
  history: PropTypes.object
};

export default Login;
