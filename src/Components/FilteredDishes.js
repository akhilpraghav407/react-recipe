import React,{useState,useContext,useEffect} from 'react'
import Pagination from './Pagination'
import CardDish from './CardDish'
import PopUp from './PopUp'
import { AllMenuContext } from './AllMenuContext'

function FilteredDishes(props) {


  let [categories,setCategory] = useState([])
  let [singleDish,setSingledish] = useState([])
  
  async function getCategoryData(){
      const API_URL ="https://www.themealdb.com/api/json/v1/1/categories.php";
      let response = await fetch(API_URL);
      let categoryData = await response.json()
      setCategory(categoryData.categories)   
  }
  async function getOnlyOneDish(){
      const API_URL ="https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
      let response = await fetch(API_URL);
      let singleDishData = await response.json();
      setSingledish(singleDishData.meals)
      
  }
 useEffect(()=>{
  getCategoryData()
  getOnlyOneDish()

 },[])

  //accessing global context
  const allMenus = useContext(AllMenuContext);
  

  // let [allMenu,setAllMenu] = useState(props.allMenu)
  let [FilteredDishes,setFilteredDishes] = useState([])
  let [activeDishes,setActiveDishes] = useState('Beef')
  let [currentPage,setCurrentPage] = useState(1)
  let [itemsPerPage,setItemsPerPage] = useState(4)

  let indexOfLastDish = currentPage * itemsPerPage;
  let indexOfFirstDish = indexOfLastDish - itemsPerPage;

  let [showPopup,setShowPopup] = useState(false);
  let [currentDish,setcurrentDish]=useState('')

  function showPopupHandler(Dish){
    setShowPopup(true)
    setcurrentDish(Dish)

}
function closePopupHandler(){
  setShowPopup(false)
}
  let showTheseDishesNow = FilteredDishes.slice(indexOfFirstDish,indexOfLastDish);
  let maxItem = 8 ;
  let singleData = singleDish.map((menuItem,index)=>{
    if(index < maxItem){
      return(
          <CardDish menuItem = {menuItem} showPopup={showPopupHandler}/>
       
      )
    }
    
  })
  
  function showFilteredDishesList(category){
    setSingledish([]);
    setActiveDishes(category);
    let filteredDishesAre = allMenus.filter((item)=>{
      return item.strCategory === category
    }).map((menuItem)=>{
      return(
        <CardDish menuItem = {menuItem} showPopup={showPopupHandler} />
      )
    })
    setFilteredDishes(filteredDishesAre)
  }
  // category menu
  let category = categories.map((item)=>{
    return(
      <li onClick={()=>{showFilteredDishesList(item.strCategory)}} className={`category-list ${item.strCategory == activeDishes ? "active":""}`}>{item.strCategory}</li>
    )
  })
  return (
    <div className='filtered-dishes'>
      {showPopup && <PopUp closePopup={closePopupHandler} currentDish={currentDish} fullMenu={allMenus}></PopUp>}
        <div className='container'>
            <div className='filtered-dishes-content text-center'>
            <h1>Choose your dishes</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus voluptatum quisquam quos illo magnam fuga tenetur natus mollitia ab optio.</p>
            </div>
            <ul className='filtered-list'>
            {category}
            </ul>
            <div className='filtered-dishes-menu'>
              <ul className='flex flex-wrap gap-25'>
                {singleData}
                {singleData !=0 || FilteredDishes.length !==0 ? showTheseDishesNow: <div><h1>update soon.....</h1></div>}
              </ul>
            </div>
            <Pagination filteredDishes={FilteredDishes} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} />
        </div>
      
    </div>
  )
}

export default FilteredDishes
