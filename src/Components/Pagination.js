import React from 'react'

function Pagination(props) {
    let numberOfPages = [];
    for(let i =1; i<= Math.ceil(props.filteredDishes.length/ props.itemsPerPage) ; i++){
        numberOfPages.push(i)
    }
    function showDishesHandler(event){
        props.setCurrentPage(event.target.id)

    }

    let pages = numberOfPages.map((pageNumber)=>{
        return(
            <li id={pageNumber} onClick={showDishesHandler}>{pageNumber}</li>
        )
    })
return (
    <section>
         <ul  className='pagination'>
            {pages}
        </ul>
    </section>
   
  )
}

export default Pagination
