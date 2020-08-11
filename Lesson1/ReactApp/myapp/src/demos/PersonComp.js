import React, { Component } from 'react'

class PersonComp extends Component {
  constructor() {
    super()
    this.state = { name: "Alex", age: 30 }
  }
  swap = () => {
    let { name, age } = this.state
    this.setState({ name: age, age: name })
  }
  render() {
    return <div>
      <span>{this.state.name} </span>
      <span>{this.state.age}</span>
      <button onClick={this.swap} className="redText">
        Swap
      </button>
    </div>
  }
}

export default PersonComp;