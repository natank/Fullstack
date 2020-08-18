import React, { Component } from 'react'
import '../../styles/user.scss';
class User extends Component {
  constructor(props) {
    super(props)
    let { name, email, address } = props.user;
    let { street, city, zipcode } = address;
    this.state = {
      isShowOtherData: false,
      isOtherBtnHover: false,
      name,
      email,
      street,
      city,
      zipcode
    }
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

  handleUserDataChange = (event, key) => {
    let { value } = event.target;
    let newState = {};
    newState[key] = value
    this.setState(newState)
  }

  renderOtherData = function () {
    if (this.state.isShowOtherData) return pug`
    .field.inline
      label Street:
      input(type="text" 
        value=this.state.street
        onChange = event => this.handleUserDataChange(event, 'street'))
    .field.inline
      label City:
      input(type="text" 
        value=this.state.city
        onChange = event => this.handleUserDataChange(event, 'city'))
    .field.inline
      label Zip Code:
      input(type="text" value=this.state.zipcode
        onChange = event => this.handleUserDataChange(event, 'zipcode'))
    `
    else return null

  }

  render() {
    let { user, hasTasks, handleClick } = this.props;
    let hasTasksClass = hasTasks ? 'user__form--has-tasks' : 'user__form--no-tasks';
    return pug`
      form.ui.form(key = user.id className = ${ hasTasksClass} onClick = event => handleClick(user.id)).user__form
        div(onClick=${(e)=>{
          this.props.selectUser(user.id)}
        }) ID: ${ this.props.user.id}
        
        .field.inline
          label Name :
          input(type = "text" 
            value = this.state.name 
            onChange=(event)=> this.handleUserDataChange(event, 'name'))

        .field.inline
          label Email :
          input(type = "text" 
            value = this.state.email
            onChange = event => this.handleUserDataChange(event, 'email'))
        button.ui.button(
          onMouseEnter = this.onOtherBtnEnter 
          onMouseLeave = this.onOtherBtnLeave
          onClick = this.onOtherBtnClick)
          | Other Data
        ${ this.renderOtherData()}
        button.ui.button(onClick = ()=>{
            let {name, email, street, city, zipcode} = this.state;
            this.props.update({
            id: this.props.user.id, 
            name,
            email,
            street,
            city,
            zipcode
          })
        })   
          | Update
        button.ui.button
          | Delete
      `

  }


}

export default User