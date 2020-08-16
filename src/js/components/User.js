import React, {Component} from 'react'
import '../../styles/user.scss';
class User extends Component {
  constructor(props){
    super(props)
  }

  renderOtherData = function(){
    return pug`
      div
        | other data dsf
    `
  }

  render(){
    let { user, hasTasks, handleClick } = this.props;
    let hasTasksClass = hasTasks ? 'user__form--has-tasks' : 'user__form--no-tasks';
    return pug`
    
      form.ui.form(key=user.id className=${hasTasksClass} onClick = event=>handleClick(user.id)).user__form
        div ID: ${user.id}  
        .field.inline
          label Name :  
          input(type="text" value = user.name)
        .field.inline
          label Email :
          input(type="text" value = user.email)
        button.ui.button
          | Other Data
        ${this.renderOtherData()}
        button.ui.button
          | Update
        button.ui.button
          | Delete
      `
  }


}

export default User