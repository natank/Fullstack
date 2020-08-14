import React, { Component } from 'react';
import './Demo1_ChildComp.css'

class Child extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="redText">
        Hello from child Comp
      </div>
    );
  }
}

export default Child;
