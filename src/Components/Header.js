import React from 'react';
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='header'>
        <div className='header-logo'>
            <img src="https://cdn-icons-png.flaticon.com/512/1869/1869042.png" alt="" />
            <h4>Food and Fun</h4>
        </div>
        <div className='header-link'>
            <Link to="/">Home</Link>
            <Link to="/checkout">Checkout</Link>
        </div>
      
    </div>
  )
}

export default Header
