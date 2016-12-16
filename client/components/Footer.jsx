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
      <ul>
        <li><Link to="/getting-here">Getting Here</Link></li>
        <li>Useful Links</li>
        <li>Contact Us</li>
      </ul>
    </ContentContainer>
  </footer>
);

export default Footer;
