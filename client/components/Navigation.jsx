import React from 'react';
import { Link } from 'react-router';

const NavItem = ({ children }) => (
  <li
    style={{
      display: 'inline-block',
      padding: '0.5em',
    }}
  >{children}</li>
);

NavItem.propTypes = {
  children: React.PropTypes.node,
};

const Navigation = () => (
  <div style={{ textAlign: 'right', backgroundColor: '#333', color: 'white' }}>
    <ul style={{ margin: 0 }}>
      <NavItem><Link to="/">Home</Link></NavItem>
      <NavItem><Link to="/invitations">Invitations</Link></NavItem>
      <NavItem>Registry</NavItem>
      <NavItem>More Info</NavItem>
    </ul>
  </div>
);

export default Navigation;
