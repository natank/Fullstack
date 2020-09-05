import React, { Component } from "react";
import { getUser, getUsers } from '../Utils/utils'

class User extends Component {
  constructor(props) {
    super(props);
    this.state = { user: null }
  }
  async componentDidMount() {
    const user = await getUser(this.props.match.params.id)
    this.setState({ user: user.data })
  }

  render() {
    if (this.state.user) {
      return pug`
          h1 ${this.state.user.name}
          h2 ${this.state.user.email}
          h2 ${this.state.user.address.city}
      `
    } else {
      return null
    }
  }
}
 
export default User;