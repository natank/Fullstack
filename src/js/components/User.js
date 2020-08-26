import React, { Component } from 'react';
import AppContext from '../Context/AppContext';
import '../../styles/Components/user.scss';
class User extends Component {
  static contextType = AppContext
  constructor(props) {
    super(props)
    let { name, email, address } = props.user;
    let { street, city, zipcode } = address || { street: '', city: '', zipcode: '' };
    this.showOtherDataTimer = undefined;

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
      /**
         * Setup a timer to Prevent rendering of the other data section
         * in case of accidential hover.
         */
      this.showOtherDataTimer = setTimeout(() => {
        this.showOtherDataTimer = undefined;

        this.setState({ isShowOtherData: true, isOtherBtnHover: true })
      }, 500)
    }
  }

  onOtherBtnLeave = event => {
    this.setState({ isOtherBtnHover: false })
    clearTimeout(this.showOtherDataTimer)
  }


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
    section.user__other-data
      .field.user__other-data__field
        label Street:
        input(type="text" 
          value=this.state.street
          onChange = event => this.handleUserDataChange(event, 'street'))
      .field.user__other-data__field
        label City:
        input(type="text" 
          value=this.state.city
          onChange = event => this.handleUserDataChange(event, 'city'))
      .field.user__other-data__field
        label Zip Code:
        input(type="text" value=this.state.zipcode
          onChange = event => this.handleUserDataChange(event, 'zipcode'))
    `
    else return null

  }

  render() {
    let { user, handleClick } = this.props;
    let hasTodos = user.hasTodos;
    let hasTodosClass = hasTodos ? 'user__form--has-todos' : 'user__form--no-todos';
    let selectedUserClass = this.context.selectedUser === user.id ? 'user__form--selected' : 'user__form--not-selected';
    return pug`
      form.ui.form(key = user.id className = ${ `${hasTodosClass} ${selectedUserClass}`} onClick = event => handleClick(user.id)).user__form
        div(onClick=${(e) => {
        this.context.selectUser(user.id)
      }
      }) ID: ${this.props.user.id}
        
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
        .fieldset.user__actions
          .user__actions--other
            button.btn(
              onMouseEnter = this.onOtherBtnEnter 
              onMouseLeave = this.onOtherBtnLeave
              onClick = this.onOtherBtnClick)
              | Other Data

          .user__actions--end
            ${ this.renderOtherData()}
            .user__actions--update
              button.btn.btn--secondary(onClick = event =>{
                  event.preventDefault();
                  let {name, email, street, city, zipcode} = this.state;
                  this.context.updateUser({
                  id: this.props.user.id, 
                  name,
                  email,
                  street,
                  city,
                  zipcode
                })
              })   
                | Update
              button.btn.btn--secondary(onClick = event => {
                event.preventDefault();
                if(confirm("Delete user ?"))
                {
                  this.context.deleteUser({userId: this.props.user.id})
                }
                else return
              })
                | Delete
      `

  }


}

export default User