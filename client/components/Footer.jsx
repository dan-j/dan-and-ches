import React from 'react';
import { Link } from 'react-router';
import ContentContainer from '../containers/ContentContainer';

const Footer = () => (
  <footer
    style={{
      backgroundColor: '#3a3a3a',
      color: '#d5d5d5',
      textAlign: 'left',
    }}
  >
    <ContentContainer main>
      <section>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/invitations">Invitations</Link></li>
          <li><Link to="/getting-there">Getting There</Link></li>
          <li><Link to="/registry">Registry</Link></li>
          <li>Contact Us</li>
        </ul>
      </section>
    </ContentContainer>
  </footer>
);

export default Footer;
