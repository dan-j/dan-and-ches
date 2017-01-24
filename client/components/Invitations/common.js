import React from 'react';

const invitationShape = React.PropTypes.shape({
  ceremony: React.PropTypes.bool,
  meal: React.PropTypes.bool,
  evening: React.PropTypes.bool,
  friendlyName: React.PropTypes.string,
  partySize: React.PropTypes.number,
});

export default { invitationShape };

