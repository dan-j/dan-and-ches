import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from '../components/App';
import Home from '../components/Home/index';
import InvitationsContainer from './InvitationsContainer';
import LoginContainer, { isLoggedIn } from '../containers/LoginContainer';
import LogoutContainer from './LogoutContainer';
import GettingHere from '../components/GettingHere';

function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

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
        header={{ mainHeader: 'You\'re Invited!' }}
        onEnter={requireAuth}
      />
      <Route
        path="getting-here"
        component={GettingHere}
        header={{ mainHeader: 'Getting Here' }}
      />
    </Route>
    <Route path="/login" component={LoginContainer} />
    <Route path="/logout" component={LogoutContainer} />
  </Router>
);

export default Root;
