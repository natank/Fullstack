import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../../styles/components/app.scss';
import Nav from './Nav'
import About from './About'
import Shop from './Shop'
import ItemDetail from './ItemDetail'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/shop/:id" component={ItemDetail} />
        </Switch>
      </Router>

    </div>
  )
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>)
}
export default App