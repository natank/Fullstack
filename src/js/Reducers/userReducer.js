const initialState = {
  users: []
}

import {ADD_USER} from '../Actions/actions'

export default function reducer(state=initialState, action){
  switch(action.type){
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    default: 
      return state
  }
}