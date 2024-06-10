import React from 'react'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Navbar({ cartlength }) {
  return (
    <div className='navbar'>
      <h1>My cart</h1>
      <div className='cartbox'>
        <p><AddShoppingCartIcon /></p>
        <p>{cartlength}</p>
      </div>

    </div>
  )
}