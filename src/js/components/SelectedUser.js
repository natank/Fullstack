import React, { Component } from 'react';
import '../../styles/components/_selectedUser.scss';
class SelectedUser extends Component {
  constructor(props) {
    super(props);
    let todos = props.todos.filter(todo => todo.userId === props.userId)
    let posts = props.posts.filter(post => post.userId === props.userId)
    
    this.state = {todos}
    this.posts = posts;
  }


  renderTodos(){
    let todosMarkup = this.state.todos.map(todo=>{
      let markCompletedBtn = null;
      if(!todo.completed) {
        
        markCompletedBtn = pug`
          button.btn.wide(onClick = ${()=> this.props.completeTodo(todo.id)}) Mark Completed
        `
      } 
      return pug`
        .selectedUser__list-item(key=${todo.id})
          .selectedUser__data-item
            | Title: ${todo.title}
          .selectedUser__data-item
            | Completed: ${todo.completed}
            ${markCompletedBtn}
      `
    })
    return todosMarkup;
  }

  RenderPosts(){
    this.posts.map(post=>{
      return pug`
        .selectedUser__data-item(key=${this.post.id})
      `
    })
  }

  render() { 
    return pug`
      .selectedUser
        .selectedUser__header
          span.selectedUser__title Todos - User ${this.props.userId}  
          button.btn.btn--small Add
        .selectedUser__media-item
          .selectedUser__list
            ${this.renderTodos()}
        .selectedUser__media-item 
          .selectedUser__header
            span.selectedUser__title Posts - User ${this.props.userId}  
            button.btn--small Add
          .selectedUser__list
            ${this.RenderPosts()}

            .selectedUser__list-item
              .selectedUser__data-item
                | Title: Some Title
              .selectedUser__data-item
                | Body: Some body...
            .selectedUser__list-item
              .selectedUser__data-item
                | Title: Some Title
              .selectedUser__data-item
                | Body: Some body
            .selectedUser__list-item
              .selectedUser__data-item
                | Title: Some Title
              .selectedUser__data-item
                | Body: Some Body
    `
  }
}

export default SelectedUser;