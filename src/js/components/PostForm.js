import React, { Component } from 'react';
import '../../styles/Components/todoForm.scss';
import AppContext from '../Context/AppContext';
class PostForm extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
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
    this.setState({ title: '', body: '' })
    this.props.setPostFlag({ isOpen: false })
  }

  handleAddPost = event => {
    event.preventDefault();
    let { title, body } = this.state;
    if (title.length === 0) return //don't allow posts w/ empty title
    this.context.createPost({ title, body });
    this.setState({ title: '', body: '' })
  }

  render() {
    if (this.props.postForm === false) return null;
    return pug`
    .selectedUser__header
      .selectedUser__title New Post - User ${this.props.userId}
    form.ui.form.new-todo(onSubmit=${this.handleAddPost})
      fieldset.new-todo__title
        .field.inline
          label Title :
          input(
            type = "text" 
            placeholder="Add title"  
            onChange=event=> this.handleUserDataChange(event, 'title') 
            value=${this.state.title}
            tabIndex=1
          )
        .field.inline
          label Body :
          input(type = "text" 
                placeholder="Add body" 
                onChange=(event)=> this.handleUserDataChange(event, 'body') value=${this.state.body}
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

export default PostForm