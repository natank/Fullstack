import React, { Component } from 'react';
import '../../styles/Components/_newTodo.scss';

class PostForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.postForm === false) return null;
    return pug`
    .selectedUser__header
      .selectedUser__title New Post - User ${this.props.userId}
    form.ui.form.new-todo
      fieldset.new-todo__title
        .field.inline
          label Title :
          input(type = "text" placeholder="Add title"  onChange=event=> this.handleUserDataChange)
        .field.inline
          label Body :
          input(type = "text" placeholder="Add body" onChange=(event)=> this.handleUserDataChange(event, 'text'))
      fieldset.new-todo__actions
        button.btn 
          | Cancel
        button.btn 
          | Add
    `
  }
}

export default PostForm