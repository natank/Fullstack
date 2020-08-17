import React, { Component } from 'react'
import '../../styles/user.scss';
class User extends Component {
  constructor(props) {
    super(props)
    let { id, name, email, address } = props.user;
    this.state = {
      isShowOtherData: false,
      isOtherBtnHover: false,
      name,
      email,
      address
    }
    console.log(this.state)
  }

  renderOtherData = function () {
    if (this.state.isShowOtherData) return pug`
    .field.inline
      label Street:
      input(type="text" value=this.state.address.street)
    .field.inline
      label City:
      input(type="text" value=this.state.address.city)
    .field.inline
      label Zip Code:
      input(type="text" value=this.state.address.zipcode)
    `
    else return null

  }

  onOtherBtnEnter = event => {
    if (!this.state.isOtherBtnHover) {
      this.setState({ isShowOtherData: true, isOtherBtnHover: true })
    }
  }

  onOtherBtnLeave = event => this.setState({ isOtherBtnHover: false })


  onOtherBtnClick = event => {
    event.preventDefault();
    this.setState({ isShowOtherData: false, isOtherBtnHover: true })
  }

  onNameChange = event => {
    let name = event.target.value;
    this.setState({ name })
  }

  render() {
    let { user, hasTasks, handleClick } = this.props;
    let hasTasksClass = hasTasks ? 'user__form--has-tasks' : 'user__form--no-tasks';
    return pug`
      form.ui.form(key = user.id className = ${ hasTasksClass} onClick = event => handleClick(user.id)).user__form
        div ID: ${ this.state.id}
        .field.inline
          label Name :
          input(type = "text" value = this.state.name onChange=${this.onNameChange})
        .field.inline
          label Email :
          input(type = "text" value = this.state.email)
        button.ui.button(
          onMouseEnter = this.onOtherBtnEnter 
          onMouseLeave = this.onOtherBtnLeave
          onClick = this.onOtherBtnClick)
          | Other Data
        ${ this.renderOtherData()}
        button.ui.button(onClick = props.update({
          id: props.user.id, 
          name: this.state.name,
          email: this.state.email,
          address: this.state.address
        }))
          | Update
        button.ui.button
          | Delete
      `

  }


}

export default User