import React, { Component } from "react";
import UserForm from './UserForm'
import utils from '../Utils/utils'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [{
        name: "Avi",
        age: 42,
        city: "Haifa",
        isAdult: true
      }]
    }
  }
  

  
  getUser = settings => {
    let user = utils.getUser(id)
    let {name, email} = user;
    this.setState({
      user: {userId: id, name, email}
    }) 
  }

  renderUsers(){
    return this.state.users.map((user, index)=>{
      let {name, age, city, adult} = user;
      return pug`
        li(key=${index})
          ${`${name} is ${age} years old, lives in ${city}, and he is ${adult ? 'not': ''} an adult`}
      `
    })
  }  

  render() {

    return (
      pug`
        h1 Parent Form
        ul
          ${this.renderUsers()}
        UserForm( getUser=${this.getUser} key1=${0})
      `
    )
  }

}

export default App