import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/authContext/authContext';
import './Navbar.css';

const Navbar = ({ title }) => {
  const { user, logout, isAuthencated, clearErrors } = useContext(AuthContext);

  const onLogout = () => {
    logout();
    clearErrors();
  };
  const authLinks = (
    <Fragment>
      <li>Hello, {user && user.name}</li>
      <span className='sm-hide'>|</span>
      <li>
        <a href='#!' onClick={onLogout}>
          <span className='sm-hide'>Logout</span>{' '}
          <i className='fas fa-sign-out-alt'></i>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <span className='sm-hide'>|</span>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar'>
      <div>Made by me</div>
      <ul>{isAuthencated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: 'Party RSVP'
};

export default Navbar;
