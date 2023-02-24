import React from "react";
import { shimmerImageUrl } from "../config";

const Shimmer = () => {
  return (
    <>
      <div className="grid place-items-center">
    <form className="flex flex-row pt-8 w-3/4 space-x-2">   

     <input 
        type="search" 
        id="default-search" 
        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-red-300 dark:bg-gray-700 dark:focus:border-blue-500 focus:outline-none" 
        placeholder="Search Restaurant Food..."      
        />

      <button className="py-2 bg-gray-50 px-8 rounded-md font-extralight max-sm:hidden text-slate-500">
        Search
      </button>

      <button
       className="sm:hidden"
       >
      <svg aria-hidden="true" className="w-8 h-8 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </button>

    </form>
  </div>

      <div className="grid grid-row place-items-center">
        {Array(10)
          .fill("")
          .map((index) => (
            <div
              className="w-56 p-4 m-3 shadow-lg rounded-md space-y-3" key={index}>
              <img className="rounded-md" src={shimmerImageUrl} />
              <img className="w-[100%] h-4 rounded" src={shimmerImageUrl} />
              <img className="w-[70%] h-4 rounded" src={shimmerImageUrl} />
              <img className="w-[90%] h-4 rounded" src={shimmerImageUrl} />
            </div>
          ))}
        ;
      </div>
    </>
  );
};

export default Shimmer;
