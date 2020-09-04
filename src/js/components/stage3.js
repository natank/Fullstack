import React, { Component } from "react";
import { Link } from "react-router-dom";


class stage3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
    };
  }

  render() {
    return pug`
      form(onSubmit= e=>{
        e.preventDefault();
        sessionStorage.setItem('city', this.state.city);
        this.props.history.push('/stage4');
      })
        .form__field
          label(for="city") City:
          select#city(name="city"
            value=this.state.city
            onChange = e=>{
              console.log(e.target.value)
              this.setState({city: e.target.value})})
                option(value="telAviv") Tel Aviv
                option(value="beerSheva") Beer Sheva
                option(value="givatayim") Rivatayim
                option(value="holon") Holon
          input(type="submit" value="Start")
        
      `;
  }
}

export default stage3;
