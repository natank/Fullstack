import React, { Component } from 'react';
import '../../styles/components/_selectedUser.scss';
import '../../styles/Components/_newTodo.scss';
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
    this.context.createTodo(this.state.title)
    this.setState({ title: '' });

  }

  handleCancelTodo = event => {
    event.preventDefault();
    this.setState({ title: '' })
  }

  renderForm() {
    if (this.props.todoForm === false) return null;
    return pug`
    .selectedUser__header
      .selectedUser__title New Todo - User ${this.props.userId}
    form.ui.form.new-todo
      fieldset.new-todo__title
        .field.inline
          label Title :
          input(type = "text" 
          placeholder="Add todo"  
          onChange= event => this.handleTodoChange(event)
          value=${this.state.title})
      fieldset.new-todo__actions
        button.btn(onClick=this.handleCancelTodo)
          | Cancel
        button.btn(onClick=this.handleAddTodo)
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