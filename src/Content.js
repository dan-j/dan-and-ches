import * as React from 'react';
import {Component} from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import './Content.css'

export default class Content extends Component {
  render() {
    return (
        <Row>
          <Grid>
            <Row>
              <Col md={12} className="content">
                <h1>Save the date</h1>
                <h4>Manchester | 25th February 2017</h4>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="dark-content">
                <p>Invites to follow</p>
              </Col>
            </Row>
          </Grid>
        </Row>
    );
  }
}