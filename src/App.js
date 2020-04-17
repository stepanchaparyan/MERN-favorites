import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layouts/Navbar/Navbar';
import Footer from './components/layouts/Footer/Footer';
import Home from './components/pages/Home/Home';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Welcome from './components/pages/Welcome/Welcome';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import AuthState from './context/authContext/AuthState';
import FavItemState from './context/favItemContext/favItemState';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/routing/PrivateRoute';
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
          <Router>
            <div>
              <Navbar />
              <Switch>
                <Route exact path="/" component={Welcome} />
                <PrivateRoute exact path="/home" component={Home} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <Route exact path="*" component={PageNotFound} />
              </Switch>
              <Footer />
            </div>
          </Router>
        </FavItemState>
      </AuthState>
    </ThemeProvider>
  );
};

export default App;
