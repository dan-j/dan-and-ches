import React from 'react';
import Navigation from './Navigation';
import bgImage from '../static/manchester_1170_442@2x.jpg';

const Header = ({ preHeader, mainHeader }) => (
  <header
    id="header"
    style={{
      textAlign: 'center',
      backgroundImage: `url(${bgImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      maxWidth: 1170,
      margin: 'auto',
      position: 'relative',
    }}
  >
    <Navigation />
    <div
      style={{
        backgroundColor: 'black',
        opacity: 0.25,
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        zIndex: 1,
      }}
    />
    <div
      style={{
        position: 'absolute',
        top: '50%',
        right: 0,
        left: 0,
        transform: 'translateY(-35%)',
        textTransform: 'uppercase',
        color: 'white',
        letterSpacing: '3px',
        zIndex: 2,
      }}
    >
      {preHeader && <h2 style={{ marginBottom: 0, fontWeight: 100 }}>{preHeader}</h2>}
      <h1 style={{ marginTop: 0, fontWeight: 100 }}>{mainHeader}</h1>
    </div>
  </header>
);

Header.propTypes = {
  preHeader: React.PropTypes.string,
  mainHeader: React.PropTypes.string.isRequired,
};

export default Header;
