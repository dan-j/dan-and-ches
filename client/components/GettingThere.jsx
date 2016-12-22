import React from 'react';

const GettingThere = () => (
  <div>
    <p style={{ maxWidth: 550, margin: '0 auto 1em' }}>For now, just the addresses of the venues are
      displayed below. Nearer the time, this page will be updated with more details such as car
      parking.</p>
    <div className="column-group column-group-sm" style={{ textAlign: 'left' }}>
      <div className="column-2 column-2-sm">
        <h3>The Ceremony</h3>
        <p>Pankhurst Suite<br />
          Heron House<br />
          47 Lloyd Street<br />
          Manchester<br />
          M2 5LE<br />
          United Kingdom</p>
      </div>
      <div className="column-2 column-2-sm">
        <h3>The Meal &amp; Party</h3>
        <p>Artisan<br />
          Avenue North<br />
          18-22 Bridge Street<br />
          Manchester<br />
          M3 3BZ</p>
      </div>
    </div>
  </div>
);

export default GettingThere;
