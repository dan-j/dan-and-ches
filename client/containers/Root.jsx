import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import App from '../components/App';
import Home from '../components/Home/index';
import InvitationsContainer from './InvitationsContainer';
import LoginContainer, { isLoggedIn } from '../containers/LoginContainer';
import LogoutContainer from './LogoutContainer';
import Registry from '../components/Registry';
import GettingThere from '../components/GettingThere';

function requireAuth(nextState, replace) {
  if (!isLoggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

function hashLinkScroll() {
  const { hash } = window.location;
  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) element.scrollIntoView();
      else window.scrollTo(0, 0);
    }, 0);
  }
}

const Root = () => (
  <Router history={browserHistory} onUpdate={hashLinkScroll}>
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
        path="getting-there"
        component={GettingThere}
        header={{ mainHeader: 'Getting There' }}
      />
      <Route
        path="registry"
        component={Registry}
        header={{ mainHeader: 'Registry' }}
      />
    </Route>
    <Route path="/login" component={LoginContainer} />
    <Route path="/logout" component={LogoutContainer} />
  </Router>
);

export default Root;
