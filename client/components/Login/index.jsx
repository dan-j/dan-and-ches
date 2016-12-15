import React from 'react';
import LoginForm from './LoginForm';
import Navigation from '../Navigation';

const Login = ({ onLogon, error }) => (
  <div>
    <Navigation color="black" />
    <div style={{ margin: 'auto', maxWidth: '400px' }}>
      <h2>Please Login</h2>
      <p style={{ marginTop: 0 }}>Your PIN can be found in your invitation email</p>
      <LoginForm onLogon={onLogon} error={error} />
    </div>
  </div>
);

Login.propTypes = {
  onLogon: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
};

export default Login;
