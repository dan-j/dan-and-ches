import * as React from 'react';
import {Component} from 'react';
import {Row} from 'react-bootstrap';
import Navigation from './Navigation';
import './Header.css'

export default class Header extends Component {
  render() {
    return (
        <Row>
          <header>
            <div className="trans-overlay"></div>
            <div className="center-content">
              <h2>Daniel & Francesca</h2>
              <h1>Are getting married!</h1>
            </div>
            <Navigation/>
          </header>
        </Row>
    );
  }
}