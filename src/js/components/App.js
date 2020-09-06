import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import '../../styles/components/app.scss';
import Nav from './Nav'
import About from './About'
import Shop from './Shop'


const App = () => {
    return (
        <div className="App">
          <Router>
            <Nav />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/shop" component={Shop} />
            </Switch>
          </Router>

        </div>
    )
  }

const Home = ()=>{
  return(
  <div>
    <h1>Home Page</h1>
  </div>)
}
export default App