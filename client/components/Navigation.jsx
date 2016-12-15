import React from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import { isLoggedIn } from '../containers/LoginContainer';

const linkStyle = { padding: '0.5em', margin: '0 0.5em', display: 'inline-block' };

const NavItem = ({ to, children, className, onClick }) => (
  <li
    style={{
      display: 'inline-block',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    }}
  >
    <Link
      style={linkStyle}
      activeClassName="active"
      onlyActiveOnIndex
      to={to}
      onClick={onClick}
      className={className}
    >{children}</Link>
  </li>
);

NavItem.propTypes = {
  to: React.PropTypes.string,
  children: React.PropTypes.node.isRequired,
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default class Navigation extends React.Component {

  static contextTypes = {
    router: React.PropTypes.object,
  };

  static propTypes = {
    color: React.PropTypes.string,
  };

  static defaultProps = {
    color: 'white',
  };

  constructor(props) {
    super(props);

    this.state = {
      burgerPressed: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ burgerPressed: !this.state.burgerPressed });
  }

  render() {
    const loginLogoff = isLoggedIn()
      ? <NavItem className="logout" to="/logout">Logout</NavItem>
      : <NavItem className="login" to="/login">Login</NavItem>;

    let { color } = this.props;

    let background;

    if (this.state.burgerPressed) {
      background = 'black';
      color = 'white';
    }

    const baseDivStyle = {
      maxWidth: 1170, margin: 'auto', textAlign: 'right', color, zIndex: 3, position: 'relative',
    };

    const listClassNames = classNames('nav-menu', { 'nav-menu-open': this.state.burgerPressed });
    const divStyle = this.state.burgerPressed
      ? { ...baseDivStyle, background }
      : baseDivStyle;

    return (
      <div className="navigation" style={divStyle}>
        <a
          className="nav-burger"
          style={{ ...linkStyle, fontSize: '2em', margin: '0', color }}
          onClick={this.toggleMenu}
        >
          <FontAwesome name="bars" />
        </a>
        <ul className={listClassNames} style={{ margin: 0 }}>
          <NavItem to="/" onClick={this.state.burgerPressed && this.toggleMenu}>Home</NavItem>
          <NavItem to="/invitations" onClick={this.state.burgerPressed && this.toggleMenu}>Invitations</NavItem>
          <NavItem>Registry</NavItem>
          <NavItem>More Info</NavItem>
          {loginLogoff}
        </ul>
      </div>
    );
  }
}
