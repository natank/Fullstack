import React from 'react';
import ReactDOM from 'react-dom';
import loadUsers from './Utils/utils'

import App from './components/App';

loadUsers();

ReactDOM.render(pug`
  App
`, document.querySelector('#root'))
