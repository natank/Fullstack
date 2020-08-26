import React, { Component } from 'react'
import AppContext from '../Context/AppContext';

class TodoList extends Component {
  static contextType = AppContext;
  constructor(props) {
    super(props);
  }

  renderTodosList() {
    let todosMarkup = this.props.todos.map(todo => {
      let markCompletedBtn = null;
      if (!todo.completed) {

        markCompletedBtn = pug`
          button.btn.btn--secondary(onClick = ${() => this.context.completeTodo(todo.id)}) Mark Completed
        `
      }
      return pug`
        .selectedUser__list-item(key=${todo.id})
          .selectedUser__data-item 
            div Title: 
            div ${todo.title}
          .selectedUser__data-item
            div Completed: 
            div(style={'display':'flex', 'justifyContent': 'space-between'})
              div ${todo.completed.toString()}
              div ${markCompletedBtn}
      `
    })
    return todosMarkup;
  }

  render() {
    if (this.props.todoForm) return null;
    return pug`
      .selectedUser__header
        .selectedUser__title Todos - User ${this.props.userId}  
        button.btn.btn--secondary(style={'display':'block'}).btn.btn--small(onClick = event => {
          event.preventDefault();
          this.props.setTodoFlag({isOpen: true})
        }) 
          | Add
      if(this.props.todos.length) 
        .selectedUser__media-item
          .selectedUser__list
            ${this.renderTodosList()}
      else  
        p.selectedUser__no-todos This user has no Todos yet
    `
  }


}

export default TodoList;