import React from 'react';
import jwtDecode from 'jwt-decode';
import Invitations from '../components/Invitations/index';
import Login from '../components/Invitations/Login/index';
import api from '../services/api';

export default class InvitationsContainer extends React.Component {

  constructor(props) {
    super(props);

    let token;

    if (localStorage.token) {
      const { exp } = jwtDecode(localStorage.token);
      const now = new Date();

      if (now - new Date(exp * 1000) > 0) {
        delete localStorage.token;
      } else {
        token = localStorage.token;
      }
    }

    this.state = {
      token,
    };

    this.handleLogon = this.handleLogon.bind(this);
    this.handleLogoff = this.handleLogoff.bind(this);
  }

  componentDidMount() {
    if (this.state.token) {
      this.loadData();
    }
  }

  loadData() {
    if (this.state.token) {
      Promise.all([
        api.getMe(this.state.token),
        api.getUsers(this.state.token),
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
          token: null,
          error: json.message,
        }));
    }
  }

  handleLogon(err) {
    if (err) {
      err.response.json()
        .then(json => this.setState({ error: json.message }));
    } else {
      this.setState({
        token: localStorage.token,
        error: '',
      }, () => this.loadData());
    }
  }

  handleLogoff() {
    delete localStorage.token;
    this.setState({ token: null });
  }

  render() {
    let content;

    if (this.state.token) {
      content = (
        <Invitations
          myInvitation={this.state.user}
          otherInvitations={this.state.data}
          onLogoff={this.handleLogoff}
        />);
    } else {
      content = <Login onLogon={this.handleLogon} error={this.state.error} />;
    }

    return content;
  }
}
