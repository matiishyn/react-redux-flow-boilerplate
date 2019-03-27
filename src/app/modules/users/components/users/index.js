import React, { Component } from 'react';

export class Users extends Component {
  componentDidMount = () => {
    const { getUsers } = this.props;
    getUsers();
  };

  render() {
    const { usersData, usersNumber } = this.props;
    return (
      <>
        <h3>Users</h3>
        <p>Found: {usersNumber} user(s)</p>

        <ul>
          {usersData.map(usr => (
            <li key={usr.id}>{usr.name}</li>
          ))}
        </ul>
      </>
    );
  }
}
