import React, { Component } from 'react';
import '../../styles/Components/_newTodo.scss';

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: undefined,
      age: undefined,
      city: undefined,
      isAdult: undefined
    }
  }


  submitDetails = ()=>{
    let {name, age, city, isAdult} = this.state;
    this.props.setUser({
      name, age, city, isAdult
    })
  }
  render() {
    return pug`
      div 
        form.user-form(onSubmit=${this.submitDetails})
          div.form-field
            label(for="name") Name
            input#name(type="text" value=${this.state.name} onChange=e=>this.setState({name: e.target.value})) 
          div.form-field
            label(for="age") Age
            input#name(type="text" value=${this.state.age} onChange=e=>{
              this.setState({age: e.target.value})
            })
          div.form-field
            label(for="city") City
            select#city(name="city" value=${this.state.city} onSelect=e=>this.setState({city: e.target.value}))
          
          div.form-field
            label(for="isAdult") is Adult:
              
          div.form-field
            input(type="submit") Add
        `
  }
}

export default UserForm