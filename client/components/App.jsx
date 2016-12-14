import React from 'react';
import Navigation from '../components/Navigation';
import ContentContainer from '../containers/ContentContainer';

const App = ({ children }) => (
  <div>
    <Navigation />
    <ContentContainer>
      {children}
    </ContentContainer>
  </div>
);

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
