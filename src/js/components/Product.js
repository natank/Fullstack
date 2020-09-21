import React from 'react'

export default function Product({ match, data }) {
  var product = data.find(function compareProductIdToRouteParam(p) {
    return p.id == match.params.productId
  })
  var productData;
  if (product)
    productData = (
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <hr />
        <h4>{product.status}</h4>
      </div>
    )
  else productData = <h2> Sorry, Product doesn't exist</h2>

  return (
    <div>
      <div>{productData}</div>
    </div>
  )
}