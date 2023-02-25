import React from 'react'
import { json, useParams } from 'react-router-dom'
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
  //  console.log(restaurantMenu?.menu?.items[14413513]);

   const result =[];

   for(var i in restaurantMenu?.menu?.items)
    result.push({id: i, name: restaurantMenu?.menu?.items[i].name, price: restaurantMenu?.menu?.items[i].price});
    console.log(result);

  return (
  <>
     <h1 className='grid place-content-center pt-6 font-bold text-5xl text-slate-500'>Menu</h1>
     <h1 className='grid place-content-center pt-3 font-bold text-3xl text-slate-500'>{restaurantMenu.name}</h1>

<div className='space-x-10 grid grid-flow-col max-sm:grid-flow-row place-content-center pt-10 px-10'>

  <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[450px]">
          <figure>
              <img class="p-6 rounded-t-lg" src={IMG_CDN_URL + restaurantMenu.cloudinaryImageId} alt="product image" />
          </figure>
      <div class="px-6 pb-4 grid grid-flow-col">
            <a href="#">
                <h5 class="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">{restaurantMenu.name}</h5>
            </a>
        <div class="flex items-center pt-2 mb-5">
            <span class="bg-red-300 red-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-red-800 ml-3">{restaurantMenu.avgRating}</span>
        </div>
        {/* <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
            <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div> */}
      </div>
    <div className='px-6 space-y-2'>
        <h3 className='text-slate-700'><strong>Location </strong> : {restaurantMenu.area}, {restaurantMenu.city}</h3>
        <h3 className='text-slate-700'><strong>Cost For Two </strong> : {restaurantMenu.costForTwoMsg}</h3>
    </div>
  </div>

    <div className='max-sm:pt-12 max-sm:pr-[3rem]'>
      <table className='text-center'>
          <thead>
            <tr>
              <th className='border px-4 py-2 text-2xl font-bold'>Name</th>
              <th className='border px-4 py-2 text-2xl font-bold'>Price</th>
            </tr>
          </thead>
          <tbody>
            {result.map((item) => (
              <tr key={item.id}>
                <td className='border px-4 py-2'>{item.name}</td>
                <td className='border px-4 py-2'>{item.price.toFixed(2)}</td> 
              </tr>
            ))}
          </tbody>
       </table>
    </div>
</div>
</>
  );
}
//toFixed returning string of 2 decimal places
//converting objects into array of values

export default RestaurantMenu