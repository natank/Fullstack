import React from "react";

import { Button } from '@material-ui/core'
import './PlainCssButton.css';
import './buttons.scss'

// constants.js
const paddingY = '7px';
const paddingX = '10px';
const baseFontSize = '1rem';
const borderRadius = '5px';

// buttons.js
const button = `
  .cssinjs-btn{
    padding: ${paddingY} ${paddingX};
    font-size: ${baseFontSize};
    border-radius: ${borderRadius};
    color: #fff;
    background-color: green;
  }
`


const App = () => {
  JSSBtn();
  return (
    <div>
      <button class="sass-btn">Sass button</button>
      <button class="cssinjs-btn">CSSinJS Button</button>

    </div>
  )
}


function JSSBtn() {
  document.head.appendChild(document.createElement('style'))
    .textContent = button
}

export default App