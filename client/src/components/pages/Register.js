import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/authContext';
import {
  Container,
  Title,
  Form,
  Input,
  Errors,
  QuestionText,
  ErrorButton
} from './RegisterStyled';

const Register = props => {
  const { register, isAuthencated, error, clearErrors, setError } = useContext(
    AuthContext
  );
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
      <Title>Sign Up</Title>
      <Form onSubmit={onsubmit}>
        <Input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onchange}
          required
        />
        <Input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onchange}
          required
        />
        <Input
          type='password'
          name='password'
          placeholder='Password'
          value={password}
          onChange={onchange}
          required
        />
        <Input
          type='password'
          name='password2'
          placeholder='Confirm Password'
          value={password2}
          onChange={onchange}
          required
        />
        <Input type='submit' value='Sing Up' />
      </Form>
      {error !== null && (
        <Errors>
          {!Array.isArray(error) ? (
            <ErrorButton type='button' onClick={() => clearErrors()}>
              {error}
            </ErrorButton>
          ) : (
            error.map(err => (
              <ErrorButton
                key={err.msg}
                type='button'
                onClick={() => clearErrors()}
              >
                {err.msg}
              </ErrorButton>
            ))
          )}
        </Errors>
      )}
      <QuestionText>
        Already have an accout? &nbsp;<Link to='/login'>Sign In</Link>
      </QuestionText>
    </Container>
  );
};

export default Register;
