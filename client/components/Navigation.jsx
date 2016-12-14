import React from 'react';
import { Link } from 'react-router';

const NavItem = ({ to, children }) => (
  <li
    style={{
      display: 'inline-block',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    }}
  >
    <Link
      style={{ padding: '0.5em', margin: '0 0.5em', display: 'inherit' }}
      to={to}
      activeClassName="active"
      onlyActiveOnIndex
    >{children}</Link>
  </li>
);

NavItem.propTypes = {
  to: React.PropTypes.string,
  children: React.PropTypes.node,
};

const Navigation = () => (
  <div style={{ float: 'right', color: 'white', zIndex: 2, position: 'relative' }}>
    <ul style={{ margin: 0 }}>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/invitations">Invitations</NavItem>
      <NavItem>Registry</NavItem>
      <NavItem>More Info</NavItem>
    </ul>
  </div>
);

export default Navigation;
