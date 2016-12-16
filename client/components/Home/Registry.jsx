import React from 'react';
import { Link } from 'react-router';

const Registry = () => (
  <div>
    <h2>Gift Registry</h2>
    <p>As many are already aware, Dan and Ches&apos; plans after the wedding are to go travelling;
      with 3 months in South America and 12 months in Australia. Because of this they aren&apos;t
      expecting many tangible gifts. Keeping this in mind, if you still wish to purchase a gift for
      the newly weds, see the Registry page linked below.</p>
    <Link className="button">See the registry</Link>
  </div>
);

export default Registry;
