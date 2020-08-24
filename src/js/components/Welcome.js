import React from 'react'
import '../../styles/Components/Welcome.scss'
let Welcome = props => {
  return pug`
    .welcome
      h1.welcome__title
        | Welcome to the Todo App
      p.welcome__message
        | Click a user's id to display his/her details
  `
}

export default Welcome;