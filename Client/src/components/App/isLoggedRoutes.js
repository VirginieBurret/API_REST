import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import UserIsConnected from '../userIsConected/Main';

const UserIsLogged = () => (
  <div className="UserIsLogged">
    <Switch>
      <Route exact path="/" component={UserIsConnected} />
      <Redirect from="/login" to="/" />
    </Switch>
  </div>
);

export default UserIsLogged;
