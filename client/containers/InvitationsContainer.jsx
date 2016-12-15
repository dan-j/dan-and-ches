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
      Promise.all([
        api.getMe(token),
        api.getUsers(token),
      ]).then(values => {
        const [me, users] = values;
        this.setState({
          user: {
            name: me.name,
            partySize: me.partySize,
            ...me.invitation,
          },
          data: users.map(item => ({
            name: item.name,
            partySize: item.partySize,
            ...item.invitation,
          })),
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
        otherInvitations={this.state.data}
        onLogoff={this.handleLogoff}
      />
      : <h2>Loading</h2>;
  }
}
