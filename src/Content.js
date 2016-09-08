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
                <h4>Manchester</h4>
              </Col>
            </Row>
            <Row className="dark">
              <h3>Formal day & evening invites to follow</h3>
            </Row>
          </Grid>
        </Row>
    );
  }
}