import React from 'react';
import { useParams } from 'react-router';
import shoes from '../shoes.json';

export const ProductDetails = () => {
  const { productId } = useParams()
  const shoe = shoes[productId];
  if (!shoe) {
    return <h2>Product Not Found!</h2>
  }
  return (
    <div className='productDetail'>
      <div>
        <h3>{shoe.name}</h3>
        <img src={shoe.img} height={500} alt={shoe.name}></img>
      </div>
    </div>
  )
}
