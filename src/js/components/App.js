import React, { Component } from "react";
import UserList from './UserList';

const jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'));

let { users, posts, todos } = jsonPlaceholderDB;
users = users.data;
posts = posts.data;
todos = todos.data;

const App = () => {


  const determineUsersTasks = function () {
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

  const updateUser = userDetails => {
    for (let i = 0; i < jsonPlaceholderDB.users.length; i++) {
      if (jsonPlaceholderDB.users[i].id === user.id) {
        usersDetails.keys.forEach(key => {
          jsonPlaceholderDB.users[i][key] = userDetails[key]
        })
        break;
      }
    }
    localStorage.setItem('jsonPlaceholderDB', JSON.stringify(jsonPlaceholderDB))

  }

  let usersTask = determineUsersTasks();

  return (
    pug`
      .div.ui.container
        UserList(userList= ${users}, usersTasks= ${usersTask}, updateUser=${updateUser})
    `
  )

}

export default App