import React, { Component } from 'react';
import '../../styles/Components/_newTodo.scss';

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: '',
      name: '',
      email: '',
      mode: "create"
    }
  }

  componentDidMount(){
    

  }

  componentDidUpdate(prevProps, prevState){
    if(this.state.mode !== "edit") {
      this.setState ( {
        userId: this.props.user.userId,
        name: this.props.user.name,
        email: this.props.user.email,
        mode: "edit"
      })
    }
  }

  render() {
    return pug`
      div 
        form.user-form 
          div.form-field
            label(for="userId") User ID
            input#userId(type="text" value=${this.state.userId} onChange=e=>this.setState({userId: e.target.value, mode:"edit"}))
            input(type="button" value=${"Get Data"} onClick=${()=>{
              this.props.getUser(this.state.userId)
              this.setState({mode:"new"})
            }
          })

            
          div.form-field
            label(for="name") Name
            input#name(type="text" value=${this.state.name} onChange=e=>{
              this.setState({name: e.target.value, mode: "edit"})
              console.log(e.target.value)
            })
          div.form-field
            label(for="email") Email
            input#email(type="text" value=${this.state.email} onChange=e=>this.setState({email: e.target.value, mode:"edit"}))
          input(type="button" value=${"Update"} onClick=${()=>{
            let {userId, name, email} = this.state;
            this.props.updateUser({userId, email, name})
            this.setState({mode:"update"})
          }})
        `
  }
}

export default UserForm