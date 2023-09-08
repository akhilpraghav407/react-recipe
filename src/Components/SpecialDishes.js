
import React, { useContext,useState } from "react";
import CardDish from "./CardDish";
import PopUp from "./PopUp";
import {AllMenuContext} from './AllMenuContext';
import AddToCart from "./AddToCart";


function SpecialDishes(props){
    console.log("menuss",props.SpecialMenu)
    let [showPopup,setShowPopup] = useState(false);
    let [currentDish,setcurrentDish]=useState('')
    let [addTocartItem,setaddTocartItem] =useState([])
    console.log("image",addTocartItem)
    
    //accessing global context
    const allMenus = useContext(AllMenuContext);

    function showPopupHandler(Dish){
        setShowPopup(true)
        setcurrentDish(Dish)

    }
    function closePopupHandler(){
        setShowPopup(false)
    }

    function addToCartHandler(addToCartImg,addToCartTitle){
        setaddTocartItem([
            ...addTocartItem,
            {
                "img" : addToCartImg,
                "title" : addToCartTitle
            
            }
        ])
    }
    let MaxSpecialDishes = 8;
    let SpecialMenu = allMenus.map((menuItem,index)=>{
        if(index < MaxSpecialDishes){
            return(
               <CardDish menuItem={menuItem} showPopup={showPopupHandler} />
        )
        }
    })
    return(

        <section className="special-dishes">
           {showPopup && <PopUp closePopup={closePopupHandler} currentDish={currentDish} fullMenu={allMenus} addToCartHandler ={addToCartHandler}></PopUp>}
            <div className="container">
            <AddToCart addTocartItem={addTocartItem}></AddToCart>
                <div className="special-dishes-content text-center">
                    <h1>Our Special Dishes</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis omnis, deleniti harum commodi, impedit minima illum quae libero non reiciendis culpa. Esse unde nobis saepe officiis beatae, vel voluptas sed.</p>
                </div>
                <div className="special-dishes-menu">
                    <ul className="flex flex-wrap gap-25">
                        {SpecialMenu}
                    </ul>
                </div>
            </div>
        </section>
        )
}
export default SpecialDishes