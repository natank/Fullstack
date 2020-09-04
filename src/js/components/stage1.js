import React from "react";
import { Link } from 'react-router-dom'

const stage1 = (props) => {
  return pug`
    h1 Welcome
    Link(to='/stage2')
      input(type="button" value="Start")
  `;
};

export default stage1;
