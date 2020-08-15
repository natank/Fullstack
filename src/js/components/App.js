import React from "react";
import UserList from './UserList';

const jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'));


const App = () => {

  return (
    pug`
      .div.ui.container
        
        UserList(userList= ${jsonPlaceholderDB.users})
    `
  )

}

export default App