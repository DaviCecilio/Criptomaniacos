import React from 'react';
import Login from './components/auth/login/login';
import ApiKey from './components/apiKey/apiKey';
import FollowTrader from './components/followTrader/followTrader';
import NotFound from './components/auth/notFound/notFound';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/', state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/apikey" component={ApiKey} />
      <PrivateRoute exact path="/followtrader" component={FollowTrader} />
      <Route path="*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
