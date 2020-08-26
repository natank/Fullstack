import React, { Component } from 'react';
import User from './User'
import '../../styles/Components/userList.scss'

class UserList extends Component {

  constructor(props) {
    super(props)
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
    return this.props.userList.filter(user => {
      if (user) {
        if (this.state.searchTerm.length < 1) return true;
        if (user.name && user.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())) return true;
        if (user.email && user.email.toLowerCase().includes(this.state.searchTerm.toLowerCase())) return true;
      }
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
          hasTodos= ${user.hasTodos} 
          handleClick=${this.handleUserClick.bind(this)})
      `
    }).bind(this))
  }

  handleUserClick(userId) {
    return
  }

  render() {
    return pug`
      .userList
        .userList__header
          .userList__search 
            label Search :  
            input(type="text" placeholder="type here" onChange = ${this.onSearchTermChange})
          .userList__add
            button.btn.btn--secondary(onClick=event=>{
            event.preventDefault()
            this.props.setUserFlag({isOpen: true})
          })
              | Add
        .ui.relaxed.divided.list ${ this.renderList()}
    `
  }
}

export default UserList;