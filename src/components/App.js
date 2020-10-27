import React from "react";
import {ThemeProvider} from '@material-ui/styles';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Header from '../components/ui/Header'
import theme from './ui/Theme'
const App = () => {
    return (
      <BrowserRouter>
      <ThemeProvider theme={theme}>
          <Header />
          <Switch>
            <Route exact path="/" component={()=><div>Home</div>}/>
            <Route exact path="/services" component={()=><div>Services</div>}/>
            <Route exact path="/customsoftware" component={()=><div>Custom Software</div>}/>
            <Route exact path="/mobileapps" component={()=><div>Mobile Apps</div>}/>
            <Route exact path="/websites" component={()=><div>Websites</div>}/>
            <Route exact path="/revolution" component={()=><div>Revolution</div>}/>
            <Route exact path="/about" component={()=><div>About Us</div>}/>
            <Route exact path="/contact" component={()=><div>Contact Us</div>}/>
            <Route exact path="/estimate" component={()=><div>Estimate</div>}/>
          </Switch>
      </ThemeProvider>
      </BrowserRouter>
    )
  }

export default App