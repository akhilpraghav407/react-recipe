import React,{useState,useEffect} from "react";
import Loader from "./Loader"; 


export const AllMenuContext = React.createContext();


//seperate export for functional component
export const AllMenus = (props)=>{
    let [menu,setMenu] = useState([]);
    let [loading,setLoading] = useState(false)

    //get All Data from API
    async function getData(){
        setLoading(true)
        const API_URL ="https://www.themealdb.com/api/json/v1/1/search.php?f=c";
        let response = await fetch(API_URL);
        let data = await response.json()
        setMenu(data.meals)
        setLoading(false)

    }
    useEffect(()=>{
        getData()
       },[])
    return(
            <AllMenuContext.Provider value={menu}>
                { !loading ? props.children : (<Loader/>) }
            </AllMenuContext.Provider>
    )
}


