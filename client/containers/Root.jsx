import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from '../components/App';
import Home from '../components/Home/index';
import InvitationsContainer from './InvitationsContainer';


const Root = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="invitations" component={InvitationsContainer} />
    </Route>
  </Router>
);

export default Root;
