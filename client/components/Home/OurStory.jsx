import React from 'react';
import SelfieCarousel from './SelfieCarousel';

const OurStory = () => (
  <section>
    <h2>Our Story</h2>
    <div
      style={{
        margin: 'auto', width: 250, height: 250, backgroundColor: 'grey', marginBottom: '2em',
      }}
    >
      <SelfieCarousel />
    </div>
    <div className="column-group">
      <div className="column-2">
        <h3>Where it began</h3>
        <p>They met in Torrevieja in the Summer of 2008. Dan was walking with a friend to meet some
          people on the commercial centre. In front of them was a girl walking on her own, dressed
          to the nines in a green dress. Dan thought it was right to point out the girl had a nice
          bottom, but failed to say this quietly, which resulted in the girl to turn around. That
          girl was Ches.</p>
        <p>It turned out Ches was meeting the same group of people that night, so they ended up
          walking to the bar together. There they spoke all night long and shared their first
          kiss. The rest is history...</p>
      </div>
      <div className="column-2">
        <h3>The engagement</h3>
        <p>2nd July 2016, nearly 8 years on, Dan organises a weekend away in the Lake District.
          After a day of adventure at Go Ape and seeing some of the countryside, they checked into
          their hotel which to Ches’ surprise, was a luxury suite in the heart of Windermere. Later
          that evening once they were ready to go out they decided to get a bottle of champagne, but
          just as Dan was about to open it he instead got on one knee and popped the question. </p>
      </div>
    </div>
  </section>
);

export default OurStory;
