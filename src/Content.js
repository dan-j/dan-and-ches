import * as React from 'react';
import {Component} from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import './Content.css'

export default class Content extends Component {
  render() {
    return (
        <Row>
          <Grid className="content">
            <Row>
              <Col md={12}>
                <h2>Save the date</h2>
                <h4>25th February 2017</h4>
              </Col>
            </Row>
            <Row className="dark">
              <Col md={12}>
                <Col md={6}>
                  <h3>Ceremony</h3>
                  <p>Pankhurst Suite | Manchester Registry Office</p>
                </Col>
                <Col md={6}>
                  <h3>Meal & Evening</h3>
                  <p>Artisan | Spinningfields</p>
                </Col>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h2>Formal day & evening invites to follow</h2>
              </Col>
            </Row>
          </Grid>
        </Row>
    );
  }
}