import React from 'react';
import pankhurstImg from '../../static/pankhurst-suite_500_332.jpg';
import diningRoomImg from '../../static/artisan-dining-room_500_333.jpg';
import barImg from '../../static/artisan-bar_500_333.jpg';

const TheDay = () => (
  <div>
    <h2 style={{ marginBottom: '0.5em' }}><a name="theday">The day</a></h2>
    <div className="column-group">
      <div className="column-3">
        <img src={pankhurstImg} width={250} height={166} alt="Pankhurst Suite" />
        <h4 style={{ marginBottom: 0 }}>The Ceremony</h4>
        <p>The day starts of at the Pankhurst Suite in Manchester&apos;s registry office. The
          ceremony can sit up to 70 guests so although not everybody has a seat at the meal, people
          are welcome to attend the ceremony if they so wish.</p>
      </div>
      <div className="column-3">
        <img src={diningRoomImg} width={250} height={166} alt="Artisan dining room" />
        <h4 style={{ marginBottom: 0 }}>The Meal</h4>
        <p>The meal is held in the private dining room at Artisan on Spinningfields. This dining
          room can accommodate 30-34 guests and so will be an intimate affair.</p>
      </div>
      <div className="column-3">
        <img src={barImg} width={250} height={166} alt="Artisan evening bar" />
        <h4 style={{ marginBottom: 0 }}>The Party</h4>
        <p>Following the meal, people will make their way downstairs to the bar in Artisan. The bar
          is reserved exclusively for the wedding guests and includes an outdoor and indoor seating
          area</p>
      </div>
    </div>
  </div>
);

export default TheDay;
