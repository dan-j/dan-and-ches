import React from 'react';

export const invitationShape = React.PropTypes.shape({
  ceremony: React.PropTypes.bool,
  meal: React.PropTypes.bool,
  evening: React.PropTypes.bool,
  friendlyName: React.PropTypes.string,
  partySize: React.PropTypes.number,
});

