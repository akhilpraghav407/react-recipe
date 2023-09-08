import { StateContext } from '../context/AppProvider';
import React, { useContext } from 'react';


function AddToCart({addTocartItem}) {

  const cartPackage = useContext(StateContext)
  
  let addToCartResults = addTocartItem.map((item)=>{
    return(
      <div>
        <img src={item.img} />
        <h6>{item.title}</h6>
      </div>
      
    )
  })
  return (
    <div className='add-to-cart-wrapper'>
        <div className='add-to-cart-item'>
          <img src={cartPackage.cartItems[0]} />
          <h6>{cartPackage.cartItems[1]}</h6>
        </div>
      
    </div>
  )
}

export default AddToCart
