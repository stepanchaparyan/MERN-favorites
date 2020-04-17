import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Register from './components/pages/Register/Register';
import Login from './components/pages/Login/Login';
import Welcome from './components/pages/Welcome/Welcome';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import PrivateRoute from './components/routing/PrivateRoute';

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Welcome} />
      <PrivateRoute exact path="/home" component={Home} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
      <Route exact path="*" component={PageNotFound} />
    </Switch>
  );
};

export default App;
