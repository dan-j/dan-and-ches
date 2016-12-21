import React from 'react';
import Invitations from '../components/Invitations/index';
import { isLoggedIn } from '../containers/LoginContainer';
import api from '../services/api';

export default class InvitationsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    if (isLoggedIn()) {
      this.loadData();
    }
  }

  loadData() {
    const { token } = localStorage;
    if (token) {
      api.getMe(token)
        .then(me => {
          this.setState({
            user: {
              name: me.name,
              partySize: me.partySize,
              ...me.invitation,
            },
            loaded: true,
          });
        }).catch(err => err.response.json())
        .catch(json => this.setState({
          error: json.message,
        }));
    }
  }

  render() {
    return this.state.loaded
      ? <Invitations
        myInvitation={this.state.user}
        onLogoff={this.handleLogoff}
      />
      : <h2>Loading</h2>;
  }
}
