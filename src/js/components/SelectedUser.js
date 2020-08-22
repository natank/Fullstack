import React, { Component } from 'react';
import '../../styles/components/_selectedUser.scss';
import TodoForm from './TodoForm';
import PostForm from './PostForm';
import TodoList from './TodoList';
import PostList from './PostList';

class SelectedUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoForm: false,
      postForm: false
    }
  }

  setTodoFlag = isOpen => {
    this.setState({ todoForm: isOpen })
  }

  render() {
    return pug`
    .selectedUser
        TodoForm(todoForm=this.state.todoForm userId=${this.props.userId})
        TodoList(todos= ${this.props.todos} todoForm=this.state.todoForm setTodoFlag = this.setTodoFlag userId=${this.props.userId})
        PostForm(postForm= this.state.postForm)
        PostList(posts= ${this.props.posts} userId = ${this.props.userId})
    `

  }
}

export default SelectedUser;