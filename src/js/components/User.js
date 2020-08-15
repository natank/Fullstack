import React from 'react'
import '../../styles/user.scss';
const User = function (props) {
  let { user, selected, handleClick } = props;
  let selectedClass = selected ? 'user__form--selected' : 'user__form--not-selected';
  return pug`
  
    form.ui.form(key=user.id className=${selectedClass} onClick = event=>handleClick(user.id)).user__form
      div ID: ${user.id}  
      .field.inline
        label Name :  
        input(type="text" value = user.name)
      .field.inline
        label Email :
        input(type="text" value = user.email)
      button.ui.button
        | Other Data
      button.ui.button
        | Update
      button.ui.button
        | Delete
    `
}

export default User