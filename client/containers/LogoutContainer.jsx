import React from 'react';

export default class LogoutContainer extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object,
  };

  componentWillMount() {
    delete localStorage.token;
    this.context.router.replace('/');
  }

  render() {
    return null;
  }

}
