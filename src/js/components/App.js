import React, { Component } from "react";
import { AppProvider } from '../Context/AppContext'
import UserList from './UserList';
import SelectedUser from './SelectedUser';

import '../../styles/Components/app.scss'

class App extends Component {
  constructor(props) {
    super(props);
    let jsonPlaceholderDB = this.initDb();
    this.state = {
      jsonPlaceholderDB: jsonPlaceholderDB,
      selectedUser: 8
    }
  }

  selectUser = id => {

    this.setState({ selectedUser: id })
  }

  completeTodo = id => {
    let { todos } = this.state.jsonPlaceholderDB;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].completed = true;
        break;
      }
    }
    this.updateDb(this.state.jsonPlaceholderDB)
  }

  getNewTodoId() {
    let { todos } = this.state.jsonPlaceholderDB;
    let newId = todos.length;
    while (todos[newId !== undefined]) newId++
    return newId + 1;
  }

  createTodo = title => {
    // create a new todo and add it to the todo list
    // Todo object should include the following properties:
    // userId, id, title, completed
    let { todos } = this.state.jsonPlaceholderDB;
    let newTodoId = this.getNewTodoId();
    let newTodo = {
      userId: this.state.selectedUser,
      title,
      id: newTodoId,
      completed: false
    }
    todos.push(newTodo);
    this.updateDb(this.state.jsonPlaceholderDB);
  }

  initDb = () => {
    let jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'));
    let { posts, users, todos } = jsonPlaceholderDB;
    jsonPlaceholderDB = {
      posts,
      users,
      todos
    }
    return jsonPlaceholderDB;
  }

  updateDb(newDb) {
    localStorage.setItem('jsonPlaceholderDB', JSON.stringify(newDb));
    let jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'))
    this.setState({ jsonPlaceholderDB })
  }

  determineUsersTodos = function () {
    const { users, todos } = this.state.jsonPlaceholderDB

    users.forEach(user => {
      user.hasTodos = false;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].userId === user.id && todos[i].completed === false) {
          user.hasTodos = true;
          break;
        }
      }
    })
  }

  updateUser = userDetails => {
    let { name, email, street, city, zipcode } = userDetails;
    let address = { street, city, zipcode }
    let userDetailsFormatted = { name, email, address };

    const { users } = this.state.jsonPlaceholderDB;

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



  renderSelectedUser() {
    if (this.state.selectedUser) {
      let { todos, posts } = this.state.jsonPlaceholderDB;

      todos = todos.filter(todo => todo.userId === this.state.selectedUser)
      posts = posts.filter(post => post.userId === this.state.selectedUser)
      return pug`
        SelectedUser(todos = ${todos}, posts=${posts}, userId=${this.state.selectedUser}, completeTodo= ${this.completeTodo})
      `
    }
    return null;
  }

  render() {

    if (!this.state.jsonPlaceholderDB) return;
    const { users } = this.state.jsonPlaceholderDB;

    this.determineUsersTodos();

    return (
      pug`
        AppProvider(value={
          selectedUser: this.state.selectedUser,
          updateUser: this.updateUser,
          selectUser:this.selectUser,
          createTodo: this.createTodo,
          completeTodo: this.completeTodo
        })
          .div.ui.container.app
            UserList(userList= ${users})
            ${this.renderSelectedUser()}
      `
    )
  }

}

export default App