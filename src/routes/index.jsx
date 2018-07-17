import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Auth from './Auth';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';
import Home from './Home';

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Welcome} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/auth" component={Auth} />
      <Route exact path="/register" component={Register} />
    </Switch>
  </BrowserRouter>
);
