import React, { useState, useEffect } from 'react'
import '../../styles/components/app.scss'
import { Link } from 'react-router-dom'

const Item = ({ match }) => {

  const [item, setItem] = useState(1);


  useEffect(() => {
    fetchItem()
  }, [])

  const fetchItem = async () => {
    console.log(match.params.id)
    setItem(match.params.id)
  }


  if (item)
    return (
      <div>
        <h1>Item {item}</h1>
      </div>

    )
}

export default Item;