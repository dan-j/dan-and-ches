import React from 'react';
import { Table } from 'reactable';
import Header from '../Header';
import ContentContainer from '../../containers/ContentContainer';
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

export default class Invitations extends React.Component {

  static propTypes = {
    data: React.PropTypes.array,
    onLogoff: React.PropTypes.func.isRequired,
  };

  render() {
    return (
      <ContentContainer>
        <Header mainHeading="Invitations"/>
        <button style={buttonStyle}
                onClick={this.props.onLogoff}>Logout
        </button>
        <p>We hope you can attend the wedding, see below for your invitation</p>
        <p>[Insert logged in person's invitations here]</p>
        <button style={buttonStyle} disabled>RSVP (coming soon)</button>
        <h2 style={{marginBottom: 0}}>All invitations</h2>
        <Table className="invitation-table" style={{minWidth: 350, margin: 'auto', width: '100%'}}
               data={this.props.data}
               filterable={['name']}
        />
      </ContentContainer>
    );
  }
}
