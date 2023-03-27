import React from "react";
import { RES_MENU } from "../config";
import { ReactDOM } from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { imageUrl } from "../config";
import Shimmer from "./Shimmer";
import MenuShimmerImage from "/src/images/MenuShimmerImage.png";

function RestaurantMenu() {
  // const [searchInput, setSearchInput] = useState("");
  const [restaurantMenu, setRestaurantMenu] = useState([]);
  const [menuItems, setMenuItems] = useState(null);

  //reading a dynamic url params
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  useEffect(() => {
    console.log(restaurantMenu);
  }, [restaurantMenu]);

  async function getRestaurantInfo() {
    const data = await fetch(RES_MENU + resId);
    const json = await data.json();
    console.log(json);
    setRestaurantMenu(json?.data?.cards[0]?.card?.card?.info);
    setMenuItems(
      Object.values(
        json?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      )
    );
  }

  console.log(menuItems);
  const itemcard = menuItems
    ?.filter((data) => data?.card?.card?.itemCards)
    .map((menuItem) => menuItem?.card?.card?.itemCards);
  console.log(itemcard);

  const result = [];

  for (let i in menuItems)
    result.push({
      id: i,
      name: restaurantMenu?.menu?.items[i].name,
      price: restaurantMenu?.menu?.items[i].price,
      cloudinaryImageId: restaurantMenu?.menu?.items[i].cloudinaryImageId,
    });
  console.log(result);

  return result?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <h1 className="pt-12 text-center underline-offset-2 font-bold text-3xl text-slate-500">
        {restaurantMenu.name}
      </h1>

      <div className="pb-4 grid place-content-center grid-flow-row max-sm:grid-flow-row pt-10 px-10">
        <div className="bg-red-300 rounded-md max-sm:bg-white py-8 grid place-content-center">
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow h-[450px]">
            <figure>
              <img
                className="p-6 rounded-t-lg"
                src={imageUrl + restaurantMenu.cloudinaryImageId}
                alt="product image"
              />
            </figure>
            <div className="px-6 pb-4 grid grid-flow-col max-sm:grid-flow-row">
              <a href="#">
                <h5 className="text-2xl font-semibold tracking-tight text-gray-900 ">
                  {restaurantMenu.name}
                </h5>
              </a>
              <div className="flex items-center pt-2 mb-5">
                <span className="bg-red-300 red-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  dark:text-red-800 max-sm:ml-1 ml-3">
                  {restaurantMenu.avgRating}
                </span>
              </div>
            </div>
            <div className="px-6 space-y-2">
              <h3 className="text-slate-700">
                <strong>Location </strong> : {restaurantMenu.area},{" "}
                {restaurantMenu.city}
              </h3>
              <h3 className="text-slate-700">
                <strong>Cost For Two </strong> : {restaurantMenu.costForTwoMsg}
              </h3>
            </div>
          </div>
        </div>
        <hr />
        <h1 className="grid place-content-center py-6 font-bold text-5xl text-slate-500">
          Menu
        </h1>
        <hr />
        <div className="mx-auto pt-12">
          <div className="grid grid-cols-4 grid-flow-row gap-8 pt-11 max-w-[80rem] max-sm:grid-cols-1 max-xl:grid-cols-3 max-md:grid-cols-2">
            {result.map((item) => (
              <div className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg w-72">
                <figure className="px-2 pt-2">
                  <img
                    src={
                      item.cloudinaryImageId.length === 0
                        ? MenuShimmerImage
                        : imageUrl + item.cloudinaryImageId
                    }
                    alt=""
                  />
                </figure>
                <div className="flex flex-col items-center my-3 space-y-2">
                  <h1 className="text-gray-900 poppins text-lg">{item.name}</h1>
                  <p className="text-gray-500 poppins text-sm text-center">
                    {}
                  </p>
                  <h2 className="text-gray-900 poppins text-2xl font-bold">
                    ₹{item.price / 100}
                  </h2>
                  <button className="bg-red-500 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105">
                    {/* <button class="inline-flex items-center justify-center w-4 h-4 mr-2 text-xs font-semibold text-red-800 bg-red-200 rounded-full">
                      -
                    </button> */}
                    Add Item
                    {/* <button class="inline-flex items-center justify-center w-4 h-4 ml-2 text-xs font-semibold text-red-800 bg-red-200 rounded-full">
                      +
                    </button> */}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
//toFixed returning string of 2 decimal places
//converting objects into array of values

export default RestaurantMenu;
