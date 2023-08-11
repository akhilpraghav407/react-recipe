import React,{useState,useEffect} from "react";
function Menu(){
    let [menu,setMenu] = useState([])
    async function getData(){
        const API_URL ="https://www.themealdb.com/api/json/v1/1/search.php?f=a";
        let response = await fetch(API_URL);
        let data = await response.json()
        setMenu(data.meals)
        
    }
   useEffect(()=>{
    getData()
   },[])
   console.log(menu)
   let meals= menu.map((item)=>{
    return(
        <div>
            <img src={item.strMealThumb}/>
            <h1>{item.strCategory}</h1>
        </div>
       
        
    )
   })
return(
    <div>{meals}</div>
    
)
    

}

export default Menu;