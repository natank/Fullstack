import React, { Component } from 'react';
import '../../styles/Components/todoForm.scss';
import AppContext from '../Context/AppContext';

class TodoForm extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleTodoChange = (event) => {
    this.setState({ title: event.target.value })
  }

  handleAddTodo = event => {
    event.preventDefault();
    let { title } = this.state;
    if (title.length === 0) return // don't allow todos w/ empty title
    this.context.createTodo({ title })
    this.setState({ title: '' });

  }

  handleCloseForm = event => {
    event.preventDefault();
    this.setState({ title: '' })
    this.props.setTodoFlag({ isOpen: false })
  }

  renderForm() {
    return pug`
    .selectedUser__header
      .selectedUser__title New Todo - User ${this.props.userId}
    form.ui.form.new-todo(onSubmit=${this.handleAddTodo})
      fieldset.new-todo__title
        .field.inline
          label Title :
          input(type = "text" 
                placeholder="Add todo"  
                onChange= event => this.handleTodoChange(event)
                value=${this.state.title}
                tabIndex=1
                )
      fieldset.new-todo__actions
        button.btn.btn--secondary(
          type="button" 
          onClick=this.handleCloseForm
          tabIndex=3
          )
          | Cancel
        button.btn.btn--secondary(
          type="submit"
          tabIndex=2
          )
          | Add
    `
  }
  render() {
    return pug`
      ${this.renderForm()}
    `
  }
}

export default TodoForm