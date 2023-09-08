import React from 'react'

function CardDish(props) {
   
  return (
    <li>
        <a href='javascript:;' onClick={()=>props.showPopup(props.menuItem.strMeal)}>
        <img className="br" src={props.menuItem.strMealThumb}/>
        <h4>{props.menuItem.strMeal}</h4>
        </a>
    </li>
  )
}

export default CardDish
