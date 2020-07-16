import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { HEADER_CONFIG } from '../../constants/headers';
import authReducer from './authReducer';
import AuthContext from './authContext';
import setAuthToken from '../../utils/setAuthToken';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGOUT,
  CLEAR_ERRORS
} from '../types';

const AuthState = props => {
  const intialState = {
    token: localStorage.getItem('token'),
    isAuthencated: null,
    loading: true,
    user: null,
    error: null
  };
  const [state, dispatch] = useReducer(authReducer, intialState);

  // Load User

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const res = await axios.get('/auth');
      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

  //Register User
  const register = async formData => {
    try {
      const res = await axios.post(
        '/register',
        formData,
        HEADER_CONFIG.CONTENT_TYPE_APPLICATION_JSON
      );
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.error
      });
    }
  };

  //login user

  const login = async formData => {
    try {
      const res = await axios.post('/auth', formData, HEADER_CONFIG.CONTENT_TYPE_APPLICATION_JSON);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.msg
      });
    }
  };
  const setError = err => {
    dispatch({
      type: REGISTER_FAIL,
      payload: [{ msg: err }]
    });
  };
  // Logout
  const logout = () => dispatch({ type: LOGOUT });

  // Clear Errors
  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthencated: state.isAuthencated,
        user: state.user,
        error: state.error,
        loading: state.loading,
        register,
        login,
        loadUser,
        logout,
        clearErrors,
        setError
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.object
};

export default AuthState;
