import React from 'react';
import ReactDOM from 'react-dom';
import utils from './Utils/utils';

import App from './components/App';
import { BrowserRouter as Router } from "react-router-dom";

utils.loadUsers();

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.querySelector('#root'))
