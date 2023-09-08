import { StateContext } from '../context/AppProvider';
import React,{useContext} from 'react';

function Checkout() {
  const cartPackage = useContext(StateContext)


  return (
    <div>
      <h2>This is checkout Page......</h2>
      <h6>hello</h6>
       <img src={cartPackage.cartItems[0]} />
          <h6>{cartPackage.cartItems[1]}</h6>
    </div>
  )
}

export default Checkout
