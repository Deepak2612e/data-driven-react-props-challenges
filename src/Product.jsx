import React from 'react'

const Product = ({ productName, price, inStock }) => {
  return (
    <div>
        <h3>{productName}</h3>
        <p>${price}</p>
        <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  )
}

export default Product