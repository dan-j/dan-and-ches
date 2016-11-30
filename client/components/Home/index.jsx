import React from 'react';

import Navigation from '../Navigation';
import ContentContainer from '../../containers/ContentContainer';
import Header from '../Header';
import Countdown from './Countdown';
import OurStory from './OurStory';
import TheDay from './TheDay';
import Timetable from './Timetable';
import Invitations from './Invitations';
import Registry from './Registry';
import MoreInfo from './MoreInfo';

export default () => (
  <div>
    <Navigation />
    <ContentContainer>
      <Header />
      <Countdown />
      <OurStory />
      <TheDay />
      <Timetable />
      <Invitations />
      <Registry />
      <MoreInfo />
    </ContentContainer>
  </div>
);
