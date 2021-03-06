import React from 'react';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import { invitationShape } from './common';
import api from '../../services/api';

export default class Rsvp extends React.Component {

  static propTypes = {
    invitation: invitationShape.isRequired,
    closeModal: React.PropTypes.func.isRequired,
    submitted: React.PropTypes.func.isRequired,
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
      .reduce((obj, event) => Object.assign(obj, { [event]: partySize }), {});

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
    if (this.state.attending === null) {
      this.props.closeModal();
      return;
    }

    const { token } = localStorage;
    let { rsvp } = this.state;

    if (!this.state.attending) {
      rsvp = Object.keys(rsvp)
        .reduce((obj, curr) => Object.assign(obj, { [curr]: 0 }), {});
    }

    api.submitRsvp(token, rsvp)
      .then(json => {
        this.props.closeModal();
        this.props.submitted(json); // `user` object
      });

    // TODO: Need to update InvitationContainer to pass rsvp object as props
  }

  generateRsvpForm() {
    // essentially a flatMap implementation which takes a list of JSX from generateOptionElem and
    // returns a list of JSX for all events the user is invited to
    const inputs = Object.keys(this.state.rsvp)
      .reduce(
        (list, eventName) => list.concat(this.generateOptionElem(eventName)),
        [],
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
    this.setState({ rsvp: Object.assign(this.state.rsvp, { [name]: parseInt(value, 10) }) });
  }

  generateOptionElem(eventName) {
    let friendlyName;

    switch (eventName) {
      case 'ceremony':
        friendlyName = 'Ceremony';
        break;
      case 'meal':
        friendlyName = 'Meal';
        break;
      case 'evening':
        friendlyName = 'Evening';
        break;
      default:
        throw new Error(`Event name must be ceremony|meal|evening but was: ${eventName}`);
    }

    const { rsvp } = this.state;
    const { partySize } = this.props.invitation;

    // create options from 0 through to the number they're invited
    const options = Array(partySize + 1).fill()
      .map((_, i) => <option key={i} value={i}>{i}</option>);

    return (
      <p key={eventName}>
        <label htmlFor={eventName}>{friendlyName}:</label>
        <select
          name={eventName}
          defaultValue={rsvp[eventName]}
          onChange={this.optionSelected}
        >
          {options}
        </select><span>&nbsp;people</span>
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
          <section>
            <p>We&apos;re thrilled to be having you! Choose the number of people
              attending the following parts of the day and submit to confirm your RSVP.</p>
            {this.generateRsvpForm()}
          </section>
        );
      } else {
        content = (
          <section>
            <p><strong>:(</strong></p>
            <p>We&apos;re sorry you can&apos;t attend. Please confirm your response below.</p>
            <input type="button" value="Confirm" className="button" onClick={this.submitRsvp} />
          </section>
        );
      }
    }

    // must use strict operators since null is a possibility
    const yesClass = classNames({ active: attending === true });
    const noClass = classNames({ active: attending === false });

    return (
      <section className="rsvp">
        <FontAwesome name="times" onClick={this.props.closeModal} style={{ position: 'absolute', top: 0, right: 0, fontSize: '1.5em', padding: '0.25em' }} />
        <h4>Are you attending the wedding?</h4>
        <section className="attending--yes-no">
          <button className={yesClass} onClick={this.toggleYes}>Yes</button>
          <button className={noClass} onClick={this.toggleNo}>No</button>
        </section>
        {content}
      </section>
    );
  }
}
