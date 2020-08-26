import React, { Component } from 'react';
import '../../styles/Components/todoForm.scss';

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: ''
    }
  }

  handleUserDataChange = (event, field) => {
    let stateObj = {}

    let value = event.target.value;

    stateObj[field] = value;

    this.setState(stateObj)
  }

  handleCloseForm = event => {
    event.preventDefault();
    this.setState({ name: '', email: '' })
    this.props.setUserFlag({ isOpen: false })
  }

  handleAddPost = event => {
    event.preventDefault();
    let { name, email } = this.state;
    if (name.length === 0 || email.length === 0) return //don't allow empty name or email
    this.props.createUser({ name, email });
    this.setState({ name: '', email: '' })
  }

  render() {
    if (this.props.postForm === false) return null;
    return pug`
    div
      .selectedUser__header
        .selectedUser__title Add new user
      form.ui.form.new-todo(onSubmit=${this.handleAddPost})
        fieldset.new-todo__title
          .field.inline
            label Name :
            input(
              type = "text" 
              placeholder="Add name"  
              onChange=event=> this.handleUserDataChange(event, 'name') 
              value=${this.state.name}
              tabIndex=1
            )
          .field.inline
            label Email :
            input(type = "text" 
                  placeholder="Add email" 
                  onChange=(event)=> this.handleUserDataChange(event, 'email') value=${this.state.email}
                  tabIndex=2
                )
                  
        fieldset.new-todo__actions
          button.btn.btn--secondary(type="button" onClick=this.handleCloseForm)
            | Cancel
          button.btn.btn--secondary(type="submit")
            | Add
    `
  }
}

export default UserForm