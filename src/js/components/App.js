import React, { Component } from "react";
import UserForm from './UserForm'
import utils from '../Utils/utils'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    }
  }
  

  
  getUser = id => {
    let user = utils.getUser(id)
    let {name, email} = user;
    this.setState({
      user: {userId: id, name, email}
    }) 
  }

  
  updateUser = settings => {
    utils.updateUser(settings);
    this.getUser(this.state.user.userId)

    
  }
  render() {

    return (
      pug`
        UserForm(user=${this.state.user} getUser=${this.getUser} updateUser=${this.updateUser} key1=${0})
      `
    )
  }

}

export default App