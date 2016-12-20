import React from 'react';
import FontAwesome from 'react-fontawesome';
import './_invitations.scss';

const buttonStyle = {
  backgroundColor: '#DB807D',
  color: 'white',
  padding: '1em 2em',
  margin: '8px 0',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '14px',
};

const EventInvitationDiv = ({ name, value }) => (
  <div style={{ display: 'inline-block', width: 100, height: 100 }}>
    <span style={{ display: 'inherit', fontSize: '2em' }}>
      <FontAwesome name={value} />
    </span>
    <br />
    <span style={{ display: 'inherit', margin: '1em' }}>{name}</span>
  </div>
);

EventInvitationDiv.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};

const Invitations = ({ myInvitation }) => {
  let invitations;

  if (myInvitation) {
    const { ceremony, meal, evening } = myInvitation;
    invitations = (
      <div>
        <div style={{ textAlign: 'center', display: 'inline-block' }}>
          <EventInvitationDiv value={ceremony ? 'check' : 'times'} name="Ceremony" />
        </div>
        <div style={{ textAlign: 'center', display: 'inline-block' }}>
          <EventInvitationDiv value={meal ? 'check' : 'times'} name="Meal" />
        </div>
        <div style={{ textAlign: 'center', display: 'inline-block' }}>
          <EventInvitationDiv value={evening ? 'check' : 'times'} name="Evening" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div>
        <p style={{ textAlign: 'center' }}>
          We hope you can attend the wedding, see below for your invitation (times can be found on
          the homepage)</p>

        {invitations || 'Loading...'}

        <button style={buttonStyle} disabled>RSVP (coming soon)</button>
      </div>
    </div>
  );
};

const invitationShape = React.PropTypes.shape({
  ceremony: React.PropTypes.bool,
  meal: React.PropTypes.bool,
  evening: React.PropTypes.bool,
});

Invitations.propTypes = {
  myInvitation: invitationShape,
};

export default Invitations;
