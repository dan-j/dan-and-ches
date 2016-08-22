import * as React from 'react';
import {Component} from 'react';
import {Row} from 'react-bootstrap';
import './Header.css'

export default class Header extends Component {
  render() {
    return (
        <Row>
          <header>
            <h1>Dan & Ches</h1>
          </header>
        </Row>
    );
  }
}