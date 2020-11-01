import React from "react";
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Button} from '@material-ui/core'
import './PlainCssButton.css';

import { StylesProvider } from '@material-ui/core/styles';

  {/* Your component tree.
  Now, you can override Material-UI's styles. */}
  
  
const App = () => {
  return(
  <StylesProvider injectFirst>
    <Btn />
  </StylesProvider>)
  }
  
const Btn = function(){

 return (
      <Button className="button" variant="contained" color="primary">
      Hello World
    </Button>
    )
 }
export default App