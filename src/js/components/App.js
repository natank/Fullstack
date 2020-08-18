import React, { Component } from "react";
import UserList from './UserList';
import SelectedUser from './SelectedUser';
import '../../styles/Components/app.scss'

class App extends Component {
  constructor(props) {
    super(props);
    let jsonPlaceholderDB = this.initDb();
    this.state = {
      jsonPlaceholderDB: jsonPlaceholderDB,
      selectedUser: null
    }
  }

  selectUser = id => {
    
    this.setState({selectedUser: id})
  }

  completeTodo = id => {
    let todos = this.state.jsonPlaceholderDB.todos.data;
    for(let i=0; i<todos.length; i++){
      if(todos[i].id === id){
        todos[i].completed=true;
        break;
      }
    }
    this.updateDb(this.state.jsonPlaceholderDB)
  }

  initDb = () => {
    const jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'));
    return jsonPlaceholderDB;
  }

  updateDb(newDb) {
    localStorage.setItem('jsonPlaceholderDB', JSON.stringify(newDb));
    let jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'))
    this.setState({ jsonPlaceholderDB })
  }

  determineUsersTodos = function () {
    const users = this.state.jsonPlaceholderDB.users.data;
    const todos = this.state.jsonPlaceholderDB.todos.data;
    const usersTodos = users.map(user => {
      let hasTodos = { user: user.id, hasTasks: false };
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].userId === user.id) {
          user.hasTodos = true;
          break;
        }
      }
      return hasTodos;
    })
    return usersTodos
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

  

  renderSelectedUser(){
    if(this.state.selectedUser) {
      const todos = this.state.jsonPlaceholderDB.todos.data;
      const posts = this.state.jsonPlaceholderDB.posts.data;
      return pug`
        SelectedUser(todos = ${todos}, posts=${posts}, userId=${this.state.selectedUser}, completeTodo= ${this.completeTodo})
      `
    }
    return null;
  }

  render() {

    if(!this.state.jsonPlaceholderDB) return;
    const users = this.state.jsonPlaceholderDB.users.data;

    let usersTask = this.determineUsersTodos();

    return (
      pug`
        .div.ui.container.app
          UserList(userList= ${users}, usersTasks= ${usersTask}, updateUser=${this.updateUser}, selectUser=${this.selectUser})
          ${this.renderSelectedUser()}
            
      `
    )
  }

}

export default App