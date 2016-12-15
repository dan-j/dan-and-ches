import React from 'react';
import { Link } from 'react-router';
import { isLoggedIn } from '../containers/LoginContainer';

const NavItem = ({ to, children, className }) => (
  <li
    style={{
      display: 'inline-block',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    }}
  >
    <Link
      style={{ padding: '0.5em 0.5em 0.25em', margin: '0 0.5em', display: 'inherit' }}
      activeClassName="active"
      onlyActiveOnIndex
      to={to}
      className={className}
    >{children}</Link>
  </li>
);

NavItem.propTypes = {
  to: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
};

const Navigation = ({ color }) => {
  const loginLogoff = isLoggedIn()
    ? <NavItem className="logout" to="/logout">Logout</NavItem>
    : <NavItem className="login" to="/login">Login</NavItem>;

  return (
    <div style={{ textAlign: 'right', color, zIndex: 2, position: 'relative', right: '0.5em' }}>
      <ul style={{ margin: 0 }}>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/invitations">Invitations</NavItem>
        <NavItem>Registry</NavItem>
        <NavItem>More Info</NavItem>
        {loginLogoff}
      </ul>
    </div>
  );
};

Navigation.contextTypes = {
  router: React.PropTypes.object,
};

Navigation.propTypes = {
  color: React.PropTypes.string,
};

Navigation.defaultProps = {
  color: 'white',
};

export default Navigation;
