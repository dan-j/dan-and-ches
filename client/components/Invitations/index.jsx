import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Table } from 'reactable';
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
  <div style={{ display: 'inline-block', padding: '2em 1.5em' }}>
    <span style={{ fontSize: '2em' }}>
      <FontAwesome name={value} />
    </span>
    <br />
    {name}
  </div>
);

EventInvitationDiv.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};

const Invitations = ({ myInvitation, otherInvitations, onLogoff }) => {
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
      <div style={{ margin: '0 1em' }}>
        <button
          style={buttonStyle}
          onClick={onLogoff}
        >Logout
        </button>
        <p>We hope you can attend the wedding, see below for your invitation</p>

        {invitations || 'Loading...'}

        <button style={buttonStyle} disabled>RSVP (coming soon)</button>
        <h2 style={{ marginBottom: 0 }}>All invitations</h2>
        <Table
          className="invitation-table"
          style={{ minWidth: 350, margin: 'auto', width: '100%' }}
          data={otherInvitations}
          filterable={['name']}
          itemsPerPage={10}
          pageButtonLimit={5}
        />
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
  otherInvitations: React.PropTypes.arrayOf(invitationShape),
  onLogoff: React.PropTypes.func.isRequired,
};

export default Invitations;
