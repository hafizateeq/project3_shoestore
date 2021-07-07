import React from 'react';
import { Link } from 'react-router-dom';
import shoes from '../shoes.json';

export const ProductIndex = () => {
  return (
    <div>
      <div className='productContainer'>
        {Object.keys(shoes).map(keyname => {
          const shoe = shoes[keyname];
          return (
            <div key={keyname}>
              <Link to={keyname} className="link">
                <h4>{shoe.name}</h4>
                <img src={shoe.img} height={300} alt={shoe.name}></img>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
