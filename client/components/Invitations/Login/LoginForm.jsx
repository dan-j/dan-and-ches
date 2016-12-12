import React, { PropTypes } from 'react';
import api from '../../../services/api';

const inputStyle = {
  width: '100%',
  padding: '0.5em 1em',
  marginBottom: '1em',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  fontSize: '1em',
};

const submitStylePlain = {
  width: '100%',
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '14px 20px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
};

const submitStyleHovering = {
  width: '100%',
  backgroundColor: '#45A049',
  color: 'white',
  padding: '14px 20px',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
};

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      pin: '',
      hover: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
    this.toggleHover = this.toggleHover.bind(this);
  }

  static propTypes = {
    onLogon: PropTypes.func.isRequired,
    error: PropTypes.string,
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  login(e) {
    e.preventDefault();

    const {email, pin} = this.state;

    console.log(`logging in as ${email} with pin ${pin}`);
    api.login(email, pin)
      .then(json => {
        console.log('saving token and user to localStorage');
        localStorage.token = json.token;
        localStorage.user = json.user;
        this.props.onLogon();
      })
      .catch(err => this.props.onLogon(err));
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  render() {
    const submitStyle = this.state.hover ? submitStyleHovering : submitStylePlain;

    let errorMessage;
    if (this.props.error) {
      errorMessage = <span style={{color: 'red'}}>{this.props.error}</span>;
    }

    return (
      <div style={{
        borderRadius: '5px',
        backgroundColor: '#f2f2f2',
        padding: '20px',
        textAlign: 'left',
      }}>
        <form onSubmit={this.login}>
          <label>Email</label>
          <input type="text"
                 name="email"
                 value={this.state.email}
                 onChange={this.handleChange}
                 style={inputStyle}
          />
          <label>Pin</label>
          <input type="password"
                 name="pin"
                 value={this.state.pin}
                 onChange={this.handleChange}
                 style={inputStyle}
          />
          {errorMessage}
          <input type="submit"
                 value="Login"
                 style={submitStyle}
                 onMouseEnter={this.toggleHover}
                 onMouseLeave={this.toggleHover}
          />
        </form>
      </div>
    );
  }
}
