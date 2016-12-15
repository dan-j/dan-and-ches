import React from 'react';
import timediff from '../../services/timediff';

const UnitDiv = ({ name, value }) => (
  <div style={{ display: 'inline-block', padding: '0em 1.5em 0em' }}>
    <span style={{ fontSize: '2.5em' }}>{value}</span>
    <br />
    <span style={{ fontSize: '1.1em' }}>{name}</span>
  </div>
);

UnitDiv.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.number.isRequired,
};

export default class Countdown extends React.Component {

  componentWillMount() {
    const then = new Date('2017/02/25 13:40:00');
    this.setState({
      then,
      countdown: timediff(new Date(), then),
    });
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        countdown: timediff(new Date(), this.state.then),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { days, hours, minutes, seconds } = this.state.countdown;
    return (
      <div className="countdown">
        <UnitDiv name="days" value={days} />
        <UnitDiv name="hours" value={hours} />
        <UnitDiv name="minutes" value={minutes} />
        <UnitDiv name="seconds" value={seconds} />
      </div>
    );
  }
}
