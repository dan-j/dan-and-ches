import React from 'react';
import FontAwesome from 'react-fontawesome';
import Modal from 'react-modal';
import { invitationShape } from './common';
import Rsvp from './Rsvp';

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

const customModalStyles = {
  overlay: {
    zIndex: 10,
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 11,
  },
};

const EventInvitationDiv = ({ name, value }) => (
  <div className="invitation-elem" style={{ display: 'inline-block', width: 90 }}>
    <span style={{ display: 'inherit', fontSize: '2em' }}>
      <FontAwesome name={value}/>
    </span>
    <br />
    <span style={{ display: 'inherit', margin: '1em auto' }}>{name}</span>
  </div>
);

EventInvitationDiv.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default class Invitations extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { ceremony, meal, evening, friendlyName, partySize } = this.props.myInvitation;
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
          <EventInvitationDiv value={ceremony ? 'check' : 'times'} name="Ceremony"/>
          <EventInvitationDiv value={meal ? 'check' : 'times'} name="Meal"/>
          <EventInvitationDiv value={evening ? 'check' : 'times'} name="Evening"/>
        </div>
        {mealText}
        <button style={buttonStyle} onClick={this.openModal}>RSVP</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customModalStyles}
          contentLabel="Example Modal"
        >
          <Rsvp invitation={this.props.myInvitation} closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

Invitations.propTypes = {
  myInvitation: invitationShape.isRequired,
};
