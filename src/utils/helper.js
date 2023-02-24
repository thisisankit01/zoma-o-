import { restaurantList } from "../config";

export function filterData(searchInput, restaurants) {
  console.log("filterdata called");
  const filteredData = restaurants.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(searchInput.toLowerCase())
  );
  return filteredData;
}

 export async function getRestaurants( setAllRestaurants,setFilteredRestaurants) {
  try {
    const response = await fetch(restaurantList);
    const json  = await response.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  } catch (error) {
    console.error("Error fetching data from API:", error);
  }
}
