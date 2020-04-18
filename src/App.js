import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';
import Routes from './Routes';
import AuthState from './context/authContext/AuthState';
import FavItemState from './context/favItemContext/favItemState';
import ProfileState from './context/profileContext/profileState';
import setAuthToken from './utils/setAuthToken';
import { ThemeProvider } from 'styled-components';
import theme from '../src/styles/theme';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthState>
        <FavItemState>
          <ProfileState>
            <Router>
              <div>
                <Navbar />
                <Routes />
                <Footer />
              </div>
            </Router>
          </ProfileState>
        </FavItemState>
      </AuthState>
    </ThemeProvider>
  );
};

export default App;
