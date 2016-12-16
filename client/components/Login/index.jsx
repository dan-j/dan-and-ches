import React from 'react';
import LoginForm from './LoginForm';
import Navigation from '../Navigation';
import ContentContainer from '../../containers/ContentContainer';

const Login = ({ onLogon, error }) => (
  <div>
    <header>
      <Navigation color="black" />
    </header>
    <ContentContainer>
      <div style={{ margin: '0 auto auto', maxWidth: '400px' }}>
        <h2>Please Login</h2>
        <p style={{ marginTop: 0 }}>Your PIN can be found in your invitation email</p>
        <LoginForm onLogon={onLogon} error={error} />
      </div>
    </ContentContainer>
  </div>
);

Login.propTypes = {
  onLogon: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
};

export default Login;
