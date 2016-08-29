import * as React from 'react';
import {Component} from 'react';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import './Navigation.css'

export default class Navigation extends Component {
  render() {
    return (
        <Navbar id="navbar">
          <Nav>
            <NavItem href="#">Our Story</NavItem>
            <NavItem href="#">Where & When</NavItem>
            <NavDropdown title="Invitations" id="invite-dropdown">
              <MenuItem>Your Invitations</MenuItem>
              <MenuItem>Attendee List</MenuItem>
            </NavDropdown>
            <NavDropdown title="Useful Info" id="info-dropdown">
              <MenuItem href="#">Accommodation</MenuItem>
              <MenuItem href="#">Parking</MenuItem>
              <MenuItem href="#">Menus</MenuItem>
              <MenuItem href="#">Contacts</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
    );
  }
}