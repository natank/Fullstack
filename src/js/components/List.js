import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { getUsers } from '../Utils/utils'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: null
    }
  }

  async componentDidMount() {
    try {

      let users = await getUsers()
      this.setState({ users })
    } catch (err) {
      console.log(err)
    }

  }

  renderUsers = () => {

    if (this.state.users) {
      return (
        this.state.users.map(user => {
          return pug`
            li(key=user.id) 
              Link(to=${`/user/${user.id}`}) ${user.name}
          `
        }))
    }

    else return null
  }
  render() {
    return pug`
    ul
      ${this.renderUsers()}
  `
  }
}

export default List