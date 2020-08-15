import React, { Component } from 'react';
import User from './User'
import userList from '../../styles/userList.scss'

class UserList extends Component {
  constructor(props) {
    super(props)
    this.userList = props.userList;
    this.state = {
      selectedUserID: null
    }
  }


  renderList() {
    return this.userList.data.map((user => {
      let selected = this.state.selectedUserID === user.id;
      return pug`
        User(key= user.id user=user selected= ${selected} handleClick=this.handleUserClick.bind(this))
      `
    }).bind(this))
  }

  handleUserClick(userId) {
    this.setState({ selectedUserID: userId })
  }

  render() {

    return pug`
    form.ui.form.userList__search 
    .field.inline
    label Name :  
    input(type="text" placeholder="type here")
    button.ui.button 
    | Add
    .ui.relaxed.divided.list ${ this.renderList()}
    `
  }
}

export default UserList;