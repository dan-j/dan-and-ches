import React from 'react';

const columnStyle = {
  display: 'inline-block',
  margin: 25,
  width: 250
};

const thumbNailStyle = {
  height: 250,
  backgroundColor: 'grey'
};

const TheDay = () => (
  <div>
    <h1><a name="theday">The day</a></h1>
    <div style={{textAlign: 'center'}}>
      <div style={columnStyle}>
        <div style={thumbNailStyle}>Image of Pankhurst Suite
        </div>
        <h4>The Ceremony</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div style={columnStyle}>
        <div style={thumbNailStyle}>Image of Dining Room
        </div>
        <h4>The Meal</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.</p>
      </div>
      <div style={columnStyle}>
        <div style={thumbNailStyle}>Image of the Bar
        </div>
        <h4>The Party</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  </div>
);

export default TheDay;
