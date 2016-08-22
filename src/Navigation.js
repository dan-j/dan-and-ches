import * as React from 'react';
import {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return (

        <Navbar fluid id="nav_center">
          <Nav>
            <NavItem disabled href="#">Their Story</NavItem>
            <NavItem disabled href="#">Where & When</NavItem>
            <NavDropdown title="Invitations" id="basic-nav-dropdown">
              <MenuItem disabled>Your Invitations</MenuItem>
              <MenuItem disabled>Attendee List</MenuItem>
            </NavDropdown>
            <NavDropdown title="Useful Info" id="basic-nav-dropdown">
              <MenuItem disabled>Accommodation</MenuItem>
              <MenuItem disabled>Parking</MenuItem>
              <MenuItem disabled>Menus</MenuItem>
              <MenuItem disabled>Contacts</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
    );
  }
}