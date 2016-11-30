import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import Home from '../components/Home/index';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={Home}/>
    {/*<Route path="/save-the-date" component={OldApp}/>*/}
  </Router>
)
