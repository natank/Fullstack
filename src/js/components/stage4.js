import React, { Component } from "react";
import { Link } from "react-router-dom";


const stage4 = props => {
  let firstName = sessionStorage.getItem('firstName')
  let lastName = sessionStorage.getItem('lastName')
  let city = sessionStorage.getItem('city')

  return pug`
    div
      p First Name: ${firstName}
      p Last Name: ${lastName}
      p City: ${city}
  `;
}

export default stage4;
