import React from 'react';

import Header from '../Header';
import Countdown from './Countdown';
import OurStory from './OurStory';
import TheDay from './TheDay';
import Timetable from './Timetable';
import Invitations from './InvitationsOverview';
import Registry from './Registry';
import MoreInfo from './MoreInfo';
import ContentContainer from '../../containers/ContentContainer';

const Home = () => (
  <ContentContainer>
    <Header preHeading="The wedding of" mainHeading="Daniel &amp; Francesca" />
    <Countdown />
    <OurStory />
    <TheDay />
    <Timetable />
    <Invitations />
    <Registry />
    <MoreInfo />
  </ContentContainer>
);

export default Home;
