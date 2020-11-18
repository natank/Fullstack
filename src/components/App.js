import React, { useState } from "react";
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './ui/Header'
import Footer from './ui/Footer'
import theme from './ui/Theme'
import Services from './Services'

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
          <Route exact path="/" render={(props)=>
            <LandingPage 
              {...props}
              setValue={setValue} 
              setSelectedIndex={setSelectedIndex}/>
            }/>
          <Route exact path="/services" render={(props)=>
            <Services 
              {...props}
              setValue={setValue} 
              setSelectedIndex={setSelectedIndex}/>} 
          />
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