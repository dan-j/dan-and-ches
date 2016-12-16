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
    <ContentContainer>
      <section>
        <ul>
          <li><Link to="/getting-there">Getting Here</Link></li>
          <li>Useful Links</li>
          <li>Contact Us</li>
        </ul>
      </section>
    </ContentContainer>
  </footer>
);

export default Footer;
