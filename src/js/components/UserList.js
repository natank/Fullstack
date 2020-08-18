import React, { Component } from 'react';
import User from './User'
import userList from '../../styles/userList.scss'

class UserList extends Component {

  constructor(props) {
    super(props)
    this.userList = props.userList;
    this.onSearchTermChange = this.onSearchTermChange.bind(this)
    this.state = {
      searchTerm: ''
    }
  }

  onSearchTermChange(event) {
    let searchTerm = event.target.value.toString();
    this.setState({ searchTerm })
  }

  filterUsersBySearchTerm = function () {
    return this.userList.filter(user => {
      if (this.state.searchTerm.length < 1) return true;
      if (user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) return true;
      if (user.email.toLowerCase().includes(this.state.searchTerm.toLowerCase())) return true;
      return false;


    })
  }

  renderList() {
    let list;

    list = this.filterUsersBySearchTerm()

    return list.map((user => {
      return pug`
        User(key= user.id 
          user=user 
          hasTasks= ${user.hasTasks} 
          handleClick=${this.handleUserClick.bind(this)}
          update = ${this.props.updateUser}
          selectUser = ${this.props.selectUser})
      `
    }).bind(this))
  }

  handleUserClick(userId) {
    return
  }

  render() {
    return pug`
      .userList
        form.ui.form.userList__search 
          .field.inline
            label Search :  
            input(type="text" placeholder="type here" onChange = ${this.onSearchTermChange})
          button.ui.button 
            | Add
        .ui.relaxed.divided.list ${ this.renderList()}
    `
  }
}

export default UserList;