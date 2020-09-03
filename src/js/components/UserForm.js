import React, { Component } from 'react';
import '../../styles/Components/_newTodo.scss';

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      name: '',
      email: ''
    }
  }

  componentDidMount(){
    

  }

  componentDidUpdate(prevProps, prevState){
    if(this.props.user && prevState.name != this.props.user.name) {
      this.setState ( {
        userId: this.props.user.userId,
        name: this.props.user.name,
        email: this.props.user.email
      })
    }
  }

  render() {
    return pug`
      div 
        form.user-form 
          div.form-field
            label(for="userId") User ID
            input#userId(type="text" value=${this.state.userId} onChange=e=>this.setState({userId: e.target.value}))
            input(type="button" value=${"Get Data"} onClick=${()=>this.props.getUser(this.state.userId)})
          div.form-field
            label(for="name") Name
            input#name(type="text" value=${this.state.name} onChange=e=>this.setState({name: e.target.value}))
          div.form-field
            label(for="email") Email
            input#email(type="text" value=${this.state.email} onChange=e=>this.setState({email: e.target.value}))
          input(type="button" value=${"Update"} onClick=${()=>{
            let {userId, name, email} = this.state;
            this.props.updateUser({userId, email, name})
          }})
        `
  }
}

export default UserForm