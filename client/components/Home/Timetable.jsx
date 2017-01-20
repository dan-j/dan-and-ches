import React from 'react';
import { Link } from 'react-router';

const LocationBlock = ({ location, children }) => (
  <div style={{ textAlign: 'left', margin: 'auto', display: 'table', maxWidth: 320, width: '100%' }}>
    <div style={{
      textAlign: 'left',
      padding: '1em 0.5em 0',
      verticalAlign: 'top',
    }}>
      <Link to="/getting-there">{location}</Link>
    </div>
    <div style={{ textAlign: 'right', padding: '0 0.5em' }}>
      {children}
    </div>
  </div>
);

const Timetable = () => (
  <section id="timetable">
    <h2>Timetable</h2>
    <h3>25th February 2017</h3>
    <ul>
      <li>
        <LocationBlock location="Heron House">
          <ul>
            <li>Arrival - 1:20pm</li>
            <li>Ceremony - 1:40pm</li>
          </ul>
        </LocationBlock>
      </li>
      <li>
        <LocationBlock location="Albert Square">
          <ul>
            <li>Photography - 2:00pm</li>
          </ul>
        </LocationBlock>
      </li>
      <li>
        <LocationBlock location="Artisan">
          <ul>
            <li>Drinks Reception - 3:00pm</li>
            <li>Speeches - 4:00pm</li>
            <li>Meal - 4:30pm</li>
            <li>Party! - 7:00pm</li>
          </ul>
        </LocationBlock>
      </li>
    </ul>
  </section>
);

export default Timetable;
