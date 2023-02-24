import React, { useEffect } from "react";
// import {restaurantList}  from "../config";
import Restaurantcard from "./RestaurantCard";
import { useState } from "react"; //named import
import { filterData , getRestaurants } from "../utils/helper";
import Shimmer from "./Shimmer";


const Body = () => {

  const [searchInput , setSearchInput] = useState(""); //to create state variable. also returns a array[variable name, function to update the array]
   const [allRestaurants, setAllRestaurants] = useState([]); //usestate enables react to rerender whole component , to search restraunts
   const [filteredRestaurants, setFilteredRestaurants] = useState([]); //renders all filtered restraunts

      useEffect(()=> { //js hook with callback function and dependency array
        const data = filterData(searchInput,allRestaurants);
        setFilteredRestaurants(data);
      }, [searchInput]);

      useEffect(()=>{
        getRestaurants(setAllRestaurants, setFilteredRestaurants)
      },[]);
 

      return allRestaurants?.length === 0 ? (

     <Shimmer /> ) : 
    (
     
    <>
    <div className="grid place-items-center">
    <form className="flex flex-row pt-8 w-3/4 space-x-2">   

     <input 
        type="search" 
        id="default-search" 
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-red-300 dark:bg-gray-700 dark:focus:border-blue-500 focus:outline-none" 
        placeholder="Search Restaurant Food..." required 
        value={searchInput}
        onChange={(e)=>{
          setSearchInput(e.target.value)
        }}
        />

      <button className="py-2 bg-gray-50 px-8 rounded-md font-extralight max-sm:hidden text-slate-500"
      onClick={()=>{
       const data = filterData(searchInput,allRestaurants);
       setFilteredRestaurants(data);
     }}>
      Search
      </button>

      <button
       className="sm:hidden"
       onClick={()=>{
        const data = filterData(searchInput,allRestaurants);
        setFilteredRestaurants(data);
      }}
       >
      <svg aria-hidden="true" className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>

    </form>
  </div>

  <div className="grid grid-row place-items-center">
  {
    filteredRestaurants.length === 0
      ? <h1 className="grid place-content-center pt-14 font-bold text-3xl">Sorry, No Restaurant Found</h1>
      : <div className="grid grid-cols-4 grid-flow-row gap-6 pt-11 max-w-fit max-sm:grid-cols-1 max-xl:grid-cols-3 max-xl:gap-0 max-md:grid-cols-2">
          {
            filteredRestaurants.map((restaurant) => {
              return <Restaurantcard {...restaurant.data} key={restaurant.data.id}/>
            })
          }
        </div>
  }
    </div>

    </>
  ) 
 }

 export default Body;


 //microservices and monolith
 //loards-render-api-updateui