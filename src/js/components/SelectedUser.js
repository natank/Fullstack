import React, { Component } from 'react';
import '../../styles/components/selectedUser.scss';
import TodoForm from './TodoForm';
import PostForm from './PostForm';
import TodoList from './TodoList';
import PostList from './PostList';
import Welcome from './Welcome';

class SelectedUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoForm: false,
      postForm: false
    }
  }

  setTodoFlag = settings => {
    this.setState({ todoForm: settings.isOpen })
  }

  setPostFlag = settings => {
    this.setState({ postForm: settings.isOpen })
  }

  render() {
    let { todoForm, postForm } = this.state;
    return pug`
    .selectedUser
      if !this.props.userId
        Welcome
      else
        if todoForm
          ${TodoForm}(
            userId = ${ this.props.userId},
            setTodoFlag = ${ this.setTodoFlag}
          )
        else
          ${TodoList}(
            todos = ${ this.props.todos} 
            setTodoFlag = ${ this.setTodoFlag} userId = ${this.props.userId}
          )
        if postForm
          ${PostForm}(
            postForm = ${ this.state.postForm},
            userId = ${ this.props.userId}
                  setPostFlag = ${ this.setPostFlag}
          )
        else 
          ${PostList}(
            posts = ${ this.props.posts} 
                  userId = ${ this.props.userId} 
                  setPostFlag = ${ this.setPostFlag}
          )
  `
  }
}

export default SelectedUser;