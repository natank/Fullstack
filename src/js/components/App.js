import React, { Component } from "react";
import { AppProvider } from '../Context/AppContext'
import UserList from './UserList';
import SelectedUser from './SelectedUser';
import UserForm from './UserForm';
import '../../styles/Components/app.scss'
import jsonPlaceholder from '../API/jsonPlaceholder'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jsonPlaceholderDB: null,
      selectedUser: { userId: undefined },
      userFlag: false
    }
  }

  async componentDidMount() {
    // Create a persistent local storage
    let jsonPlaceholderDB = await this.initDb();
    this.setState({ jsonPlaceholderDB })
  }

  /** DB Methods  */

  initDb = async () => {
    let jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'));
    // for persistent localStorage value, we initialize jsonPlaceholderDb from network only if it not exists
    if (!jsonPlaceholderDB) {
      await this.createLocalDb()
      jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'));
    }
    let { posts, users, todos } = jsonPlaceholderDB;
    jsonPlaceholderDB = {
      posts,
      users,
      todos
    }
    return jsonPlaceholderDB;
  }
  createLocalDb = async () => {

    let jsonPlaceholderDB = localStorage.getItem('jsonPlaceholderDB');
    if (!jsonPlaceholderDB) {
      jsonPlaceholderDB = {}
      try {

        jsonPlaceholderDB.posts = await jsonPlaceholder.get('/posts')
        jsonPlaceholderDB.users = await jsonPlaceholder.get('/users')
        jsonPlaceholderDB.todos = await jsonPlaceholder.get('/todos')
      } catch (err) {
        console.log(err)
      }
      jsonPlaceholderDB.posts = jsonPlaceholderDB.posts.data;
      jsonPlaceholderDB.users = jsonPlaceholderDB.users.data;
      jsonPlaceholderDB.todos = jsonPlaceholderDB.todos.data;

      let data = JSON.stringify(jsonPlaceholderDB);
      localStorage.setItem('jsonPlaceholderDB', data)
    }
  }

  updateDb = newDb => {
    localStorage.setItem('jsonPlaceholderDB', JSON.stringify(newDb));
    let jsonPlaceholderDB = JSON.parse(localStorage.getItem('jsonPlaceholderDB'))
    this.setState({ jsonPlaceholderDB })
  }


  /** User Methods */

  setUserFlag = settings => this.setState({ userFlag: settings.isOpen });


  updateUser = userDetails => {
    let { name, email, street, city, zipcode } = userDetails;
    let address = { street, city, zipcode }
    let userDetailsFormatted = { name, email, address };

    const { users } = this.state.jsonPlaceholderDB;

    for (let i = 0; i < users.length; i++) {
      if (users[i].id === userDetails.id) {
        Object.keys(userDetailsFormatted).forEach(key => {
          users[i][key] = userDetailsFormatted[key]
        })
        break;
      }
    }
    this.updateDb(this.state.jsonPlaceholderDB)
  }

  deleteUser = settings => {
    let { users, todos, posts } = this.state.jsonPlaceholderDB;
    const { userId } = settings;

    let db = {}
    db.posts = posts.filter(post => post.userId !== userId)
    db.todos = todos.filter(todo => todo.userId !== userId)
    db.users = users.filter(user => user.id !== userId)

    if (userId === this.state.selectedUser.userId) {
      this.setState({ selectedUser: { userId: undefined } })
    }
    this.updateDb(db)
  }

  selectUser = id => {
    let userExists = this.checkUserExists(id)
    if (userExists) {
      this.setState({ selectedUser: { userId: id } })
    }
  }

  checkUserExists = userId => {
    // check if user with the id exists
    let { users } = this.state.jsonPlaceholderDB;
    return users.some(user => user.id === userId)
  }

  createUser = user => {
    let { users } = this.state.jsonPlaceholderDB;
    let newUserId = this.getNewId({ contentObj: 'user' });
    let newUser = {
      id: newUserId,
      name: user.name,
      userName: user.email,
      email: user.email,
      address: null
    }
    users.push(newUser);
    this.updateDb(this.state.jsonPlaceholderDB)
  }
  /** Todo Methods */

  createTodo = todo => {
    // create a new todo and add it to the todo list
    // Todo object should include the following properties:
    // userId, id, title, completed
    let { todos } = this.state.jsonPlaceholderDB;
    let newTodoId = this.getNewId({ contentObj: "todo" });
    let newTodo = {
      userId: this.state.selectedUser.userId,
      title: todo.title,
      id: newTodoId,
      completed: false
    }
    todos.push(newTodo);
    this.updateDb(this.state.jsonPlaceholderDB);
  }
  completeTodo = id => {
    let { todos } = this.state.jsonPlaceholderDB;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === id) {
        todos[i].completed = true;
        break;
      }
    }
    this.updateDb(this.state.jsonPlaceholderDB)
  }

  /** Generic function to get an id for a new user/todo/post */
  getNewId = settings => {
    // the setting object specifies the contentObj name (e.g todo/user/post)

    /**content array's name is the plural of contentObj (e.g. todo=>todos)*/
    let contentArray = this.state.jsonPlaceholderDB[`${settings.contentObj}s`]

    if (contentArray == undefined) throw ("unknown content array name")
    let lastIndex = contentArray.length - 1;
    let newId = contentArray[lastIndex].id + 1;
    return newId;
  }



  createPost = post => {
    let { posts } = this.state.jsonPlaceholderDB;
    let newPostId = this.getNewId({ contentObj: 'post' });
    let newPost = {
      userId: this.state.selectedUser.userId,
      title: post.title,
      body: post.body,
      id: newPostId
    }
    posts.push(newPost);
    this.updateDb(this.state.jsonPlaceholderDB)
  }
  determineUsersTodos = function () {
    const { users, todos } = this.state.jsonPlaceholderDB

    users.forEach(user => {
      user.hasTodos = false;
      for (let i = 0; i < todos.length; i++) {
        if (todos[i].userId === user.id && todos[i].completed === false) {
          user.hasTodos = true;
          break;
        }
      }
    })
  }

  renderSelectedUser = () => {
    let { todos, posts } = this.state.jsonPlaceholderDB;

    todos = todos.filter(todo => todo.userId === this.state.selectedUser.userId)
    posts = posts.filter(post => post.userId === this.state.selectedUser.userId)
    return pug`
        SelectedUser(
          todos = ${todos}, 
          posts=${posts}, 
          userId=${this.state.selectedUser.userId}, 
          completeTodo= ${this.completeTodo},
          renderSelectedUser=${this.renderSelectedUser},
          )
      `


  }

  render() {

    if (!this.state.jsonPlaceholderDB) return null;
    const { users } = this.state.jsonPlaceholderDB;

    this.determineUsersTodos();

    return (
      pug`
        AppProvider(value={
          selectedUser: this.state.selectedUser.userId,
          updateUser: this.updateUser,
          selectUser:this.selectUser,
          deleteUser: this.deleteUser,
          createTodo: this.createTodo,
          completeTodo: this.completeTodo,
          createPost: this.createPost
        })
          .app
            UserList(
              userList= ${users}, 
              setUserFlag=${this.setUserFlag}
              )
            if(this.state.userFlag)
              UserForm(
                setUserFlag = ${this.setUserFlag},
                createUser = ${this.createUser},

                )
            else
              ${this.renderSelectedUser()}
      `
    )
  }

}

export default App