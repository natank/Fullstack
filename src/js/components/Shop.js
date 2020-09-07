import React, { useState, useEffect } from 'react'
import '../../styles/components/app.scss'
import { Link } from 'react-router-dom'
const Shop = () => {
    useEffect(() => {
        fetchItems()
    }, [])
    const [items, setItems] = useState([]);
    const fetchItems = async () => {
        let data = [{
            name: "item-1",
            description: "item1 description",
        }, {
            name: "item-2",
            description: "item2 description",
        }, {
            name: "item-3",
            description: "item3 description",
        }, {
            name: "item-4",
            description: "item4 description",
        }, {
            name: "item-5",
            description: "item5 description",
        }, {
            name: "item-6",
            description: "item6 description",
        }, {
            name: "item-7",
            description: "item7 description",
        }]
        setItems(data)
    }
    return (
        <div className="App">
            {items.map((item, index) => (
                <h1 key={index}>
                    <Link to={`/shop/${index}`}>{item.name}</Link>
                </h1>
            ))}
        </div>

    )
}

export default Shop;