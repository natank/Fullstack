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
  

  
  getUser = async id => {
    let user = await utils.getUser(id)
    let {name, email} = user;
    this.setState({
      user: {userId: id, name, email}
    }) 
  }


  updateUser = async settings => {
    let {userId, email, name} = settings
  }
  render() {

    return (
      pug`
        UserForm(user=${this.state.user} getUser=${this.getUser} updateUser=${this.updateUser} )
      `
    )
  }

}

export default App