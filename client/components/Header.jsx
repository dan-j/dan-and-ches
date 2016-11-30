import React from 'react';
import bgImage from '../static/manchester_2340_843.png';

export default () => (
  <div style={{
    textAlign: 'center',
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'auto 350px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: 350,
    maxWidth: 970,
    margin: 'auto',
    position: 'relative',
  }}>
    <div style={{
      backgroundColor: 'black',
      opacity: 0.2,
      height: '100%',
      width: '100%',
      position: 'absolute',
      zIndex: 1,
    }}></div>
    <div style={{
      position: 'absolute',
      top: 0, right: 0, bottom: 0, left: 0,
      margin: 'auto',
      height: '50%',
      textTransform: 'uppercase',
      color: 'white',
      letterSpacing: '3px',
      zIndex: 2,
    }}>
      <h2 style={{fontSize: '2em', fontWeight: 100}}>The wedding of</h2>
      <h1 style={{fontSize: '3em', fontWeight: 100}}>Daniel &amp; Francesca</h1>
    </div>
  </div>
);
