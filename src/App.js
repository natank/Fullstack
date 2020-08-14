import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Child from './demos/Demo1_ChildComp'
import PersonalData from './demos/PersonalData'
import PersonComp from './demos/PersonComp'
import AddTotal from './demos/AddTotal'

class App extends Component {
  constructor() {
    super()
  }
  render() {
    return <div className="App">
      <h1>Hello World</h1>
      <Child />

      <AddTotal />
    </div >
  }
}

export default App;
