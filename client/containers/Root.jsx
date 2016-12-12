import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from '../components/App';
import Home from '../components/Home/index';
import InvitationsContainer from './InvitationsContainer';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="invitations" component={InvitationsContainer}/>
    </Route>
    {/*<Route path="/save-the-date" component={OldApp}/>*/}
  </Router>
);

export default Root;
