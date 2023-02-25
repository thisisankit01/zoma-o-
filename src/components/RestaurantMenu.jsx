import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { IMG_CDN_URL } from '../config';

function RestaurantMenu() {
   const [restaurantMenu , setRestaurantMenu] = useState([]);


  //reading a dynamic url params
  const { resId } = useParams();

   useEffect(()=>{
    getRestaurantInfo();
   } ,[])

   async function getRestaurantInfo(){
    const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" + resId)
    const json = await data.json();
    console.log(json.data);
    setRestaurantMenu(json.data)
   }
   
   console.log(restaurantMenu.menu);

  return (
  <div>
    <div className='grid place-content-center pt-10'>
      <h1>Restaurant id : {resId}</h1>
      <h2>{restaurantMenu.name}</h2>
      <img src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId} alt="" />
      <h3>{restaurantMenu.area}</h3>
      <h3>{restaurantMenu.city}</h3>
      <h3>{restaurantMenu.avgRating}</h3>
      <h3>{restaurantMenu.costForTwoMsg}</h3>
    </div>
    <div>
      <ul>
      {/* {Object.values(restaurantMenu.menu.items).map((item)=>(
           <li key={item.id}>
            {item.name}
            </li>
      ))} */}
      </ul>
    </div> 
</div>
  )
}
//converting objects into array of values

export default RestaurantMenu