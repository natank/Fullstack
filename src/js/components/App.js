import React, { Component } from "react";
import UserList from './UserList';



class App extends Component {
  constructor(props) {
    super(props);
    let jsonPlaceholderDB = this.initDb();
    this.state = {
      jsonPlaceholderDB: jsonPlaceholderDB
    }
  }

  initDb = () => {
    const jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'));
    return jsonPlaceholderDB;
  }
  determineUsersTasks = function () {
    const users = this.state.jsonPlaceholderDB.users.data;
    const todos = this.state.jsonPlaceholderDB.todos.data;
    const usersTasks = users.map(user => {
      let hasTasks = { user: user.id, hasTasks: false };
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].userId === user.id) {
          user.hasTasks = true;
          break;
        }
      }
      return hasTasks;
    })
    return usersTasks
  }

  updateUser = userDetails => {
    let { name, email, street, city, zipcode } = userDetails;
    let address = { street, city, zipcode }
    let userDetailsFormatted = { name, email, address };

    const users = this.state.jsonPlaceholderDB.users.data;
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userDetails.id) {
        Object.keys(userDetailsFormatted).forEach(key => {
          users[i][key] = userDetailsFormatted[key]
        })
        break;
      }
    }
    this.updateDb(this.state.jsonPlaceholderDB)
  }

  updateDb(newDb) {
    localStorage.setItem('jsonPlaceholderDB', JSON.stringify(newDb));
    let jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'))
    this.setState({ jsonPlaceholderDB })
  }

  render() {
    const users = this.state.jsonPlaceholderDB.users.data;
    let usersTask = this.determineUsersTasks();

    return (
      pug`
        .div.ui.container
          UserList(userList= ${users}, usersTasks= ${usersTask}, updateUser=${this.updateUser})
      `
    )
  }

}

export default App