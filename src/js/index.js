import React from 'react';
import ReactDOM from 'react-dom';
import utils from './Utils/utils'

import App from './components/App';

utils.loadUsers();

ReactDOM.render(pug`
  App
`, document.querySelector('#root'))
