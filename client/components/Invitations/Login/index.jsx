import React from 'react';
import LoginForm from './LoginForm';

const Login = ({onLogon, error}) => (
  <div style={{margin: 'auto', maxWidth: '400px'}}>
    <h1>Please Login</h1>
    <p style={{marginTop: 0}}>Your PIN can be found in your invitation email</p>
    <LoginForm onLogon={onLogon} error={error} />
  </div>
);

export default Login;
