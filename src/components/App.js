import React, { useState } from "react";
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './ui/Header'
import Footer from '../components/ui/Footer'
import theme from './ui/Theme'

import LandingPage from '../components/LandingPage'
const App = () => {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0)
  var props = { value, setValue, selectedIndex, setSelectedIndex }
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header props={props} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/services" component={() => <div>Services</div>} />
          <Route exact path="/customsoftware" component={() => <div>Custom Software</div>} />
          <Route exact path="/mobileapps" component={() => <div>Mobile Apps</div>} />
          <Route exact path="/websites" component={() => <div>Websites</div>} />
          <Route exact path="/revolution" component={() => <div>Revolution</div>} />
          <Route exact path="/about" component={() => <div>About Us</div>} />
          <Route exact path="/contact" component={() => <div>Contact Us</div>} />
          <Route exact path="/estimate" component={() => <div>Estimate</div>} />
        </Switch>
        <Footer props={props} />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App