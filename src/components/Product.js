import React from 'react';
import { Outlet } from 'react-router-dom';

export const Product = () => {

  return (
    <div>
      <h1>Shoe Store</h1>
      <Outlet />
    </div>
  )
}
