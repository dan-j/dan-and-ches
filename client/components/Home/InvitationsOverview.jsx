import React from 'react';
import { Link } from 'react-router';

const InvitationsOverview = () => (
  <section>
    <h2>Invitations</h2>
    <p>Although the meal is an intimate affair, the ceremony venue can accommodate more people.
      For those that aren&apos;t coming to the meal that wish to attend the ceremony you&apos;re
      more than welcome to - the more the merrier!</p>
    <Link to="/invitations" className="button" style={{ display: 'inline-block' }}>
      See the Invitations
    </Link>
  </section>
);

export default InvitationsOverview;
