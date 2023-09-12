import { StateContext } from '../context/AppProvider';
import React,{useContext} from 'react';

function Checkout() {
  const cartPackage = useContext(StateContext);
  console.log("cartpackages are......",cartPackage)

  let cartPackagesAre = cartPackage.cartItems.map((item)=>{
    return(
      <div>
              <img src={item.img}/>
              <h3>{item.title}</h3>
      </div>
    )
  })

  return (
    <div className='special-dishes'>
        <div className='special-dishes-menu'>
            <div className='flex flex-wrap gap-25'>
              {cartPackagesAre}
            </div>
      
        </div>
    </div>
   
  )
}

export default Checkout
