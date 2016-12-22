import React from 'react';
import { Link } from 'react-router';

const Registry = () => (
  <section>
    <h2>Gift Registry</h2>
    <p>As many are already aware, Dan and Ches&apos; plans after the wedding are to go travelling;
      with 3 months in South America and 12 months in Australia. Because of this they aren&apos;t
      expecting many gifts. Keeping this in mind, if you wish to contribute to their travels see the
      Registry page linked below.</p>
    <Link className="button" to="/registry">See the registry</Link>
  </section>
);

export default Registry;
