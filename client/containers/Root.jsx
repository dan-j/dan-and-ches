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
      <IndexRoute
        component={Home}
        header={{ preHeader: 'The Wedding Of', mainHeader: 'Daniel & Francesca' }}
      />
      <Route
        path="invitations"
        component={InvitationsContainer}
        header={{ mainHeader: 'Invitations' }}
      />
    </Route>
  </Router>
);

export default Root;
