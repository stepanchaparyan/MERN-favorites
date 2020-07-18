import React, { useContext, useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authContext/authContext';
import { Container, Title, Form, Input, Errors, QuestionText, ErrorButton } from './RegisterStyled';
import localization from './localization';

const Register = props => {
  const { register, isAuthencated, error, clearErrors, setError } = useContext(AuthContext);
  const { formatMessage } = useIntl();

  useEffect(() => {
    if (isAuthencated) {
      props.history.push('/');
    }
  }, [isAuthencated, props.history]);

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });
  const { name, email, password, password2 } = user;
  const onchange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    if (error !== null) {
      clearErrors();
    }
  };
  const onsubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setError('Password does not match');
    } else {
      register({
        name,
        email,
        password
      });
    }
  };
  return (
    <Container>
      <Title>{formatMessage(localization.signup)}</Title>
      <Form onSubmit={onsubmit}>
        <Input
          type="text"
          name="name"
          placeholder={formatMessage(localization.name)}
          value={name}
          onChange={onchange}
          required
        />
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
        <Input
          type="password"
          name="password2"
          placeholder={formatMessage(localization.confirmPassword)}
          value={password2}
          onChange={onchange}
          required
        />
        <Input type="submit" value={formatMessage(localization.signup)} />
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
        {formatMessage(localization.alreadyHaveAnAccout)} &nbsp;
        <Link to="/login">{formatMessage(localization.signin)}</Link>
      </QuestionText>
    </Container>
  );
};

Register.propTypes = {
  history: PropTypes.object
};

export default Register;
