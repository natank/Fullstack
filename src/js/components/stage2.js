import React, { Component } from "react";
import { Link } from "react-router-dom";


class stage2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  render() {
    return pug`
      form(onSubmit= e=>{
        e.preventDefault()
        sessionStorage.setItem('firstName', this.state.firstName)
        sessionStorage.setItem('lastName', this.state.lastName)
        this.props.history.push('/stage3');
        })
        .form__field
          label(for="firstName") First Name:
          input#firstName(type="text" 
            value=this.state.firstName 
            onChange = e=>this.setState({firstName: e.target.value}))
        
        .form__field
          label(for="lastName") Last Name:
          input#lastName(type="text" 
            value=this.state.lastName 
            onChange = e=>this.setState({lastName: e.target.value}))
        
        input(type="submit" value="Start")
      `;
  }
}

export default stage2;
