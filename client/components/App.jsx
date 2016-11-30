import React from 'react';
import 'whatwg-fetch';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: 'Not Loaded',
      email: '',
      pin: '',
    };

    this.getData = this.getData.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (localStorage.token) {
      headers.Authorization = localStorage.token;
    }

    fetch('/api/users', {headers})
      .then(response => this.checkStatus(response))
      .then(response => response.json())
      .then(json => this.setState({
        data: JSON.stringify(json, null, 2),
      }))
      .catch(err => this.setState({data: err.message}));
  }

  checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
      return res;
    } else {
      const error = new Error(res.statusText);
      error.response = res;
      throw error;
    }
  }

  login(event) {
    event.preventDefault();

    const email = this.state.email;
    const pin = this.state.pin;

    const headers = {
      'Content-Type': 'application/json',
    };

    fetch('/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        pin,
      }),
      headers,
    }).then(response => this.checkStatus(response))
      .then(response => response.json())
      .then(json => {
        localStorage.token = json.token;
        localStorage.user = json.user;
        this.getData();
      })
      .catch(err => this.setState({data: `Unable to Log in: ${err}`}));
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    let data;

    if (this.state.data) {
      data = <div>{this.state.data}</div>;
    }

    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.login}>
          <label>Email<input type="text"
                             name="email"
                             value={this.state.email}
                             onChange={this.handleChange}/>
          </label>
          <label>Pin<input type="password"
                           name="pin"
                           value={this.state.pin}
                           onChange={this.handleChange}/></label>
          <input type="submit" value="Login"/>
        </form>
        <button onClick={this.getData}>Click me!</button>
        {data}
      </div>
    );
  }
}
