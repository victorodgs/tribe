import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Login } from './pages/Login'
import { Feed } from './pages/Feed'
import { UserProfileMenu } from './components/organisms/UserProfileMenu'

export default () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <Route exact path="/feed" component={Feed} />
    <Route exact path="/feed" component={UserProfileMenu} />
  </Switch>
);
