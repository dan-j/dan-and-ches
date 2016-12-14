import React from 'react';

import Header from '../Header';
import Countdown from './Countdown';
import OurStory from './OurStory';
import TheDay from './TheDay';
import Timetable from './Timetable';
import Invitations from './InvitationsOverview';
import Registry from './Registry';
import MoreInfo from './MoreInfo';

const Home = () => (
  <div>
    <Header preHeading="The wedding of" mainHeading="Daniel &amp; Francesca" />
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
