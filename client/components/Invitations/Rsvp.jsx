import React from 'react';
import { invitationShape } from './common';

const inputStyle = {
  width: '100%',
  padding: '0.5em 1em',
  marginBottom: '1em',
  display: 'inline-block',
  border: '1px solid #ccc',
  borderRadius: '4px',
  boxSizing: 'border-box',
  fontSize: '1em',
};

export default class Rsvp extends React.Component {

  static propTypes = {
    invitation: invitationShape.isRequired,
    closeModal: React.PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const { invitation } = props;
    const { ceremony, meal, evening, partySize } = invitation;

    /*
     * if invited to all events produces:
     * { ceremony: partySize, meal: partySize, evening: partySize }
     * i.e. only invited to evening:
     * { evening: partySize }
     */
    const rsvp = Object.keys({ ceremony, meal, evening })
      .filter(key => invitation[key])
      .reduce((rsvp, event) => Object.assign(rsvp, { [event]: partySize }), {});

    this.state = {
      rsvp,
      attending: null,
    };

    this.submitRsvp = this.submitRsvp.bind(this);
    this.toggleYes = this.toggleYes.bind(this);
    this.toggleNo = this.toggleNo.bind(this);
    this.generateRsvpForm = this.generateRsvpForm.bind(this);
    this.generateOptionElem = this.generateOptionElem.bind(this);
    this.optionSelected = this.optionSelected.bind(this);
  }

  submitRsvp() {
    const { rsvp } = this.state;

    if (this.state.attending === false) {
      const rejectRsvp = Object.keys(rsvp)
        .reduce((obj, curr) => Object.assign(obj, { [curr]: 0 }), {});
      console.log(`Submitting RSVP with: ${JSON.stringify(rejectRsvp)}`);
    } else {
      console.log(`Submitting RSVP: ${JSON.stringify(this.state.rsvp)}`);
    }

    this.props.closeModal();
  }

  generateRsvpForm() {

    // essentially a flatMap implementation which takes a list of JSX from generateOptionElem and
    // returns a list of JSX for all events the user is invitated to
    const inputs = Object.keys(this.state.rsvp)
      .reduce(
        (list, eventName) => list.concat(this.generateOptionElem(eventName)),
        []
      );

    return (
      <form>
        {inputs}
        <input
          className="button"
          type="button"
          onClick={this.submitRsvp}
          value="Submit"
        />
      </form>
    );
  }

  optionSelected(event) {
    const { name, value } = event.target;
    this.setState({ rsvp: Object.assign(this.state.rsvp, { [name]: parseInt(value) })});
  }

  generateOptionElem(eventName) {
    let friendlyName;

    switch (eventName) {
      case 'ceremony': friendlyName = 'Ceremony'; break;
      case 'meal': friendlyName = 'Meal'; break;
      case 'evening': friendlyName = 'Evening'; break;
      default: throw new Error(`Event name must be ceremony|meal|evening but was: ${eventName}`);
    }

    const { rsvp } = this.state;
    const { partySize } = this.props.invitation;

    // create options from 0 through to the number they're invited
    const options = Array(partySize + 1).fill()
      .map((_, i) => <option key={i} value={i}>{i}</option>);

    return (
      <p key={eventName}>
        <label htmlFor={eventName}>{friendlyName}</label>
        <select
          name={eventName}
          defaultValue={rsvp[eventName]}
          onChange={this.optionSelected}>
            {options}
        </select>
        <br />
      </p>
    );
  }

  toggleYes() {
    // if this.state.attending is null or false, set to true
    if (!this.state.attending) {
      this.setState({ attending: true });
    } else {
      // else set to null
      this.setState({ attending: null });
    }
  }

  toggleNo() {
    // if this.state.attending is null or true, set to false
    if (this.state.attending == null || this.state.attending) {
      this.setState({ attending: false });
    } else {
      // else set to null
      this.setState({ attending: null });
    }
  }

  render() {

    const { attending } = this.state;

    let content;

    if (attending != null) {
      if (attending) {
        content = (
          <div>
            <p>We're thrilled to be having you at the wedding! Choose the number of people
              attending the following parts of the day and submit to confirm your RSVP.</p>
            {this.generateRsvpForm()}
          </div>
        );
      } else {
        content = (
          <div>
            <p>We're sorry you can't attend! If you change your mind then don't hesitate to contact
              us, although once everyone has responded we may offer rejected invitations to
              others.</p>
            <input type="button" value="Confirm" onClick={this.submitRsvp}/>
          </div>
        );
      }
    }

    return (
      <div>
        <h2>RSVP</h2>
        <div>
          <button onClick={this.toggleYes}>Yes</button>
          <button onClick={this.toggleNo}>No</button>
        </div>
        {content}
      </div>
    );
  }
}
