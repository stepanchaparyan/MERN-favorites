import React from 'react';
import { storiesOf } from '@storybook/react';
import Profile from '../Profile';
import AuthState from '../../../../context/authContext/AuthState';

storiesOf('Profile', module).add('default', () => (
  <AuthState>
    <Profile />
  </AuthState>
));
