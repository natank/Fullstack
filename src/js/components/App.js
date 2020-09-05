import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import User from './user'
import List from './List'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return pug`
      Link(to = ${`/`}) Home  
      Switch
        Route(path='/' exact component=List)
        Route(path = '/user/:id' component= User)
    `

  }
}

export default App;
