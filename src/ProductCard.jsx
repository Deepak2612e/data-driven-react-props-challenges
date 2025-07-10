import React from 'react'

const ProductCard = ({ name, email, imageUrl }) => {
  return (
    <div>
        <img src = {imageUrl} alt='image Loading'/>
        <h2>{name}</h2>
        <p>{email}</p>
    </div>
  )
}

export default ProductCard