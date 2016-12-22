import React from 'react';

import Countdown from './Countdown';
import OurStory from './OurStory';
import TheDay from './TheDay';
import Timetable from './Timetable';
import Invitations from './InvitationsOverview';
import Registry from './Registry';

const Home = () => (
  <div>
    <Countdown />
    <OurStory />
    <TheDay />
    <Timetable />
    <Invitations />
    <Registry />
  </div>
);

export default Home;
