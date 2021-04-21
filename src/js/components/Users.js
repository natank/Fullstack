import React from 'react'
import {connect} from 'react-redux';

function mapStateToProps(state){
  return {
    users: state.users
  }
}

function Users(props) {
  const {users} = props
  return (
    <div>
      <h2>Parent Component</h2>
      {
        users.map(user=><li>
          {`${user.name} is ${user.age}, lives in ${user.city} he is ${user.adult ? 'an Adult': 'not an Adult'}`}
        </li>)
      }
    </div>
  )
}

export default connect(mapStateToProps, {})(Users)
