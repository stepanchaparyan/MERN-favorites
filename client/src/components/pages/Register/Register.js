import React, { useContext, useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/authContext/authContext';
import {
  Container,
  Title,
  Form,
  Input,
  Errors,
  QuestionText,
  ErrorButton,
  RegisterButton
} from './RegisterStyled';
import localization from './localization';
import { FORM, LINK, ERRORS } from '../../../constants';

const { INPUT } = FORM;

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
      setError(ERRORS.TEXT.PASSWORD_MATCH);
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
          type={INPUT.TYPE.TEXT}
          name={INPUT.NAME.NAME}
          placeholder={formatMessage(localization.name)}
          value={name}
          onChange={onchange}
          required
        />
        <Input
          type={INPUT.TYPE.EMAIL}
          name={INPUT.NAME.EMAIL}
          placeholder={formatMessage(localization.email)}
          value={email}
          onChange={onchange}
          required
        />
        <Input
          type={INPUT.TYPE.PASSWORD}
          name={INPUT.NAME.PASSWORD}
          placeholder={formatMessage(localization.password)}
          value={password}
          onChange={onchange}
          required
        />
        <Input
          type={INPUT.TYPE.PASSWORD}
          name={INPUT.NAME.PASSWORD_2}
          placeholder={formatMessage(localization.confirmPassword)}
          value={password2}
          onChange={onchange}
          required
        />
        <RegisterButton>{formatMessage(localization.signup)}</RegisterButton>
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
        {formatMessage(localization.alreadyHaveAnAccout)} &nbsp;
        <Link to={LINK.TO.LOGIN}>{formatMessage(localization.signin)}</Link>
      </QuestionText>
    </Container>
  );
};

Register.propTypes = {
  history: PropTypes.object
};

export default Register;
