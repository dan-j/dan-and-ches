import React from 'react';
import Navigation from '../components/Navigation';
import ContentContainer from '../containers/ContentContainer';

export default class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation/>
        {this.props.children}
      </div>
    );
  }
}
