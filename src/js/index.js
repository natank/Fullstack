import React from 'react';
import ReactDOM from 'react-dom';
import jsonPlaceholder from './API/jsonPlaceholder'
import App from './components/App';


/**
 * CREATE LOCAL DB FROM API
 */

const createLocalDb = async () => {
  let jsonPlaceholderDB = {};
  try {

    jsonPlaceholderDB.posts = await jsonPlaceholder.get('/posts')
    jsonPlaceholderDB.users = await jsonPlaceholder.get('/users')
    jsonPlaceholderDB.todos = await jsonPlaceholder.get('/todos')
  } catch (err) {
    console.log(err)
  }
  let data = JSON.stringify(jsonPlaceholderDB);
  localStorage.setItem('jsonPlaceholderDB', data)
}

createLocalDb();

ReactDOM.render(pug`
  App
`, document.querySelector('#root'))
