import React, { Component } from 'react';

class SelectedUser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return pug`
      div
        | Selected User
    `
  }
}

export default SelectedUser;