import React from "react";
import UserList from './UserList';

const jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'));

let {users, posts, todos} = jsonPlaceholderDB;
users=users.data; 
posts=posts.data; 
todos=todos.data;

const App = () => {

  
  const determineUsersTasks = function(){
    const usersTasks = users.map(user=>{
      let hasTasks = {user: user.id, hasTasks: false} ;
      for(let i = 0; i<todos.length;i++){
        if(todos[i].userId === user.id) {
          user.hasTasks = true;
          break;
        }
      }
      return hasTasks;
    })
    return usersTasks
  }

  let usersTask = determineUsersTasks();

  return (
    pug`
      .div.ui.container
        UserList(userList= ${users}, usersTasks= ${usersTask})
    `
  )

}

export default App