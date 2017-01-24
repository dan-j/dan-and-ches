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

    this.extractUser = this.extractUser.bind(this);
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
        .then(me => this.extractUser(me))
        .catch(err => err.response.json())
        .catch(json => this.setState({
          error: json.message,
        }));
    }
  }

  extractUser(user) {
    const newState = {
      invitation: {
        friendlyName: user.friendlyName,
        partySize: user.partySize,
        ...user.invitation,
      },
      loaded: true,
    };

    if (user.rsvp) {
      newState.rsvp = user.rsvp;
    }

    this.setState(newState);
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2 style={{ textAlign: 'left' }}>Oops, an error occurred</h2>
          <p>Message: {this.state.error}</p>
        </div>
      );
    }

    return this.state.loaded
      ? <Invitations
        myInvitation={this.state.invitation}
        rsvpSubmitted={this.extractUser}
        rsvp={this.state.rsvp}
      />
      : <h2>Loading</h2>;
  }
}
