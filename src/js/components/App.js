import React, {Fragment} from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import userReducer from '../Reducers/userReducer'
import Form2 from './Form2'
import Users from './Users'


const store = createStore(userReducer);

export default function App(props){


  return   <Provider store = {store}>
      <Users />
      <Form2 />
    </Provider>
      
}