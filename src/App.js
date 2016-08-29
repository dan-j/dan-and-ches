import * as React from 'react';
import {Component} from 'react';
import {Grid} from 'react-bootstrap';
import './App.css';
import Header from './Header';
import Content from './Content';

export default class App extends Component {
  render() {
    return (
          <Grid>
            <Header/>
            <Content/>
          </Grid>
    );
  }
}