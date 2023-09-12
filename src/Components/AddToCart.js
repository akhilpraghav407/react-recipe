import { StateContext } from '../context/AppProvider';
import React, { useContext } from 'react';


function AddToCart({addTocartItem}) {

  const cartPackage = useContext(StateContext)
  console.log("cartpackage",cartPackage)

  let cartPackagesAre = cartPackage.cartItems.map((item)=>{

          return(
            <div>
                <img src={item.img} />
                <h6>{item.title}</h6>
            </div>
          )
  })
  
  let addToCartResults = addTocartItem.map((item)=>{
    return(
      <div>
        <img src={item.img} />
        <h6>{item.title}</h6>
        <hr />
      </div>
      
    )
  })
  return (
    <div className='add-to-cart-wrapper'>
        <div className='add-to-cart-item'>
        {cartPackagesAre}
        </div>
      
    </div>
  )
}

export default AddToCart
