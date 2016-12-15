import React from 'react';
import jwtDecode from 'jwt-decode';
import Login from '../components/Login/index';

export const isLoggedIn = () => {
  if (localStorage.token) {
    const { exp } = jwtDecode(localStorage.token);
    const now = new Date();

    if (now - new Date(exp * 1000) > 0) {
      delete localStorage.token;
      return false;
    }

    return true;
  }

  return false;
};

export default class LoginContainer extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object,
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      error: null,
    };

    this.handleLogon = this.handleLogon.bind(this);
  }

  handleLogon(err) {
    if (err) {
      err.response.json()
        .then(json => this.setState({
          error: json.message,
        }));
    } else {
      const redirect = this.context.router.location.state
        ? this.context.router.location.state.nextPathname
        : '/';
      this.context.router.push(redirect);
    }
  }

  render() {
    return <Login onLogon={this.handleLogon} error={this.state.error} />;
  }

}
