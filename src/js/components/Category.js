import React from "react"
import { Link, Route } from 'react-router-dom';


function Category({ match }) {
  debugger
  console.log(`Category match: ${match}`)
  return (
    <div>
      {" "}
      <ul>
        <li>
          <Link to={`${match.url}}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${match.url}}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={
          function renderCategory({ match }) {
            return (
              <div>
                {" "}
                <h3>{match.params.className}</h3>
              </div>
            )
          }
        }
      />
    </div>
  )
}

export default Category;