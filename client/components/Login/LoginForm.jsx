import React, { PropTypes } from 'react';
import api from '../../services/api';

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

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  login(e) {
    e.preventDefault();

    const { email, pin } = this.state;

    api.login(email, pin)
      .then(json => {
        localStorage.token = json.token;
        this.props.onLogon();
      })
      .catch(err => this.props.onLogon(err));
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    let errorMessage;
    if (this.props.error) {
      errorMessage = <span style={{ color: 'red' }}>{this.props.error}</span>;
    }

    return (
      <div
        style={{
          borderRadius: '5px',
          backgroundColor: '#f2f2f2',
          padding: '20px',
          textAlign: 'left',
        }}
      >
        <form onSubmit={this.login} style={{ marginBottom: 0 }}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <label htmlFor="pin">Pin</label>
          <input
            type="password"
            name="pin"
            value={this.state.pin}
            onChange={this.handleChange}
            style={inputStyle}
          />
          {errorMessage}
          <input
            className="button"
            type="submit"
            value="Login"
            style={{ display: 'block', width: '100%' }}
            onMouseEnter={this.toggleHover}
            onMouseLeave={this.toggleHover}
          />
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
  onLogon: PropTypes.func.isRequired,
  error: PropTypes.string,
};
