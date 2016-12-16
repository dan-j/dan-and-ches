import React from 'react';
import Header from './Header';
import ContentContainer from '../containers/ContentContainer';
import Footer from './Footer';

const App = (props) => {
  const { header } = props.routes[props.routes.length - 1];
  return (
    <div>
      <Header {...header} />
      <ContentContainer>
        {props.children}
      </ContentContainer>
      <Footer />
    </div>
  );
};

App.propTypes = {
  children: React.PropTypes.node,
  routes: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      header: React.PropTypes.shape({
        preHeader: React.PropTypes.string,
        mainHeader: React.PropTypes.string.isRequired,
      }),
    }),
  ),
};

export default App;
