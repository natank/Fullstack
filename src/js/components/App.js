import React from "react";
import { Link, Switch, Route } from 'react-router-dom';
import '../../styles/components/app.scss';

import Products from './Products'
import Category from './Category'

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}





export default function App({ match }) {
  console.log(`App match: ${match}`)
  return (
    <div className="App">
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li>
            <Link to="/">Homes</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/category" component={Category} />
      <Route path="/products" component={Products} />
    </div>
  )
}

