import React from 'react';
import LoginForm from './LoginForm';
import Navigation from '../Navigation';
import ContentContainer from '../../containers/ContentContainer';

const Login = ({ onLogon, error }) => (
  <div>
    <Navigation color="black" />
    <ContentContainer>
      <section style={{ margin: '0 auto auto', maxWidth: '400px' }}>
        <h2 style={{ marginTop: 0 }}>Please Login</h2>
        <p style={{ marginTop: 0 }}>Your PIN can be found in your invitation email</p>
        <LoginForm onLogon={onLogon} error={error} />
      </section>
    </ContentContainer>
  </div>
);

Login.propTypes = {
  onLogon: React.PropTypes.func.isRequired,
  error: React.PropTypes.string,
};

export default Login;
