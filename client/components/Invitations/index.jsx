import React from 'react';
import FontAwesome from 'react-fontawesome';

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
  <div className="invitation-elem" style={{ display: 'inline-block', width: 90 }}>
    <span style={{ display: 'inherit', fontSize: '2em' }}>
      <FontAwesome name={value} />
    </span>
    <br />
    <span style={{ display: 'inherit', margin: '1em auto' }}>{name}</span>
  </div>
);

EventInvitationDiv.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};

const Invitations = ({ myInvitation }) => {
  const { ceremony, meal, evening, friendlyName, partySize } = myInvitation;
  let mealText;
  if (ceremony && !meal) {
    mealText = (
      <p style={{ textAlign: 'justify', fontSize: '0.9em' }}>Due to the venue size for the meal we
        sadly can&apos;t invite everyone from the ceremony. We&apos;d love for you to attend the
        rest of the day however if the gap between is inconvenient we completely understand if you
        don&apos;t make it to both halves.</p>
    );
  }
  return (
    <div>
      <p style={{ textAlign: 'center' }}>{friendlyName}, we hope you can attend the wedding.</p>

      <p style={{ textAlign: 'center' }}>
        Your invitation is for {partySize} {partySize === 1 ? ' person' : ' people'}.</p>
      <div style={{ textAlign: 'center' }}>
        <EventInvitationDiv value={ceremony ? 'check' : 'times'} name="Ceremony" />
        <EventInvitationDiv value={meal ? 'check' : 'times'} name="Meal" />
        <EventInvitationDiv value={evening ? 'check' : 'times'} name="Evening" />
      </div>
      {mealText}
      <button style={buttonStyle} disabled>RSVP (coming soon)</button>
    </div>
  );
};

const invitationShape = React.PropTypes.shape({
  ceremony: React.PropTypes.bool,
  meal: React.PropTypes.bool,
  evening: React.PropTypes.bool,
  friendlyName: React.PropTypes.string,
  partySize: React.PropTypes.number,
});

Invitations.propTypes = {
  myInvitation: invitationShape.isRequired,
};

export default Invitations;
