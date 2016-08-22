import * as React from 'react';
import {Component} from 'react';
import './App.css';
import Header from './Header';
import Navigation from './Navigation'

export default class App extends Component {
  render() {
    return (
          <div>
            <Header/>
            <Navigation/>
          </div>
    );
  }
}