import React, { Component } from 'react';

export class Users extends Component {
  componentDidMount = () => {
    const { getUsers } = this.props;
    getUsers();
  };

  render() {
    return <>Users</>;
  }
}
