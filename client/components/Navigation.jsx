import React from 'react';

const NavItem = ({children}) => (
  <li style={{
    display: 'inline-block',
    padding: '0.5em',
  }}><a>{children}</a></li>
);

export default () => (
  <div style={{textAlign: 'right', backgroundColor: '#333', color: 'white'}}>
    <ul style={{margin: 0}}>
      <NavItem>The Day</NavItem>
      <NavItem>Invitations</NavItem>
      <NavItem>Registry</NavItem>
      <NavItem>More Info</NavItem>
    </ul>
  </div>
);
