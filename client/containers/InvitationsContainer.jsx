import React from 'react';
import Invitations from '../components/Invitations/index';
import Login from '../components/Invitations/Login/index';
import api from '../services/api';

export default class InvitationsContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      token: localStorage.token,
    };

    this.handleLogon = this.handleLogon.bind(this);
    this.handleLogoff = this.handleLogoff.bind(this);
  }

  handleLogon(err) {
    if (err) {
      console.log(`Unable to login: ${err}`);
      err.response.json()
        .then(json => this.setState({error: json.message}));
    } else {
      this.setState({
        token: localStorage.token,
        error: '',
      });
    }
  }

  handleLogoff() {
    delete localStorage['token'];
    this.setState({token: null});
  }

  componentDidMount() {
    if (this.state.token) {
      api.getUsers(this.state.token)
        .then(json => this.setState({
          data: json.map(item => ({
            name: item.name,
            partySize: item.partySize,
            ...item.invitation,
          }))
        }));
    }
  }

  render() {
    let content;

    // const data = [{
    //   Name: "Dan",
    //   'Party Size': 3,
    //   Ceremony: true,
    //   Meal: true,
    //   Evening: true,
    // }, {
    //   Name: "John",
    //   'Party Size': 2,
    //   Ceremony: true,
    //   Meal: false,
    //   Evening: true,
    // }, {
    //   Name: "Jane",
    //   'Party Size': 1,
    //   Ceremony: false,
    //   Meal: false,
    //   Evening: true,
    // }];

    if (this.state.token) {
      content = <Invitations data={this.state.data} onLogoff={this.handleLogoff}/>;
    } else {
      const {error} = this.state;
      content = <Login onLogon={this.handleLogon} error={error}/>;
    }

    return content;
  }
}
