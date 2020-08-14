import React, { Component } from 'react'

import './PersonalData.css';
class PersonalData extends Component {
  constructor() {
    super()
  }
  render() {
    return <div>
      Personal Data:
      <h2>Full Name: {this.props.FullName} Address: {this.props.Address}</h2>
    </div>
  }
}

export default PersonalData