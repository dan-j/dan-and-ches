import React from 'react';

import Countdown from './Countdown';
import OurStory from './OurStory';
import TheDay from './TheDay';
import Timetable from './Timetable';
import Invitations from './InvitationsOverview';
import Registry from './Registry';
import MoreInfo from './MoreInfo';

const Home = () => (
  <div>
    <Countdown />
    <OurStory />
    <TheDay />
    <Timetable />
    <Invitations />
    <Registry />
    <MoreInfo />
  </div>
);

export default Home;
