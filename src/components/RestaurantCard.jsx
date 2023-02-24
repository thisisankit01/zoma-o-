import { imageUrl } from "../config";

const Restaurantcard = ({cloudinaryImageId,name,cuisines,lastMileTravelString}) => {
  return(
   <div className="w-72 bg-base-100 hover:shadow-2xl h-80 max-sm:w-72 max-xs:w-56 hover:border-solid hover:border-3">
   <figure className="px-5 pt-5">
     <img src={ imageUrl +cloudinaryImageId }/>
   </figure>
   <div className="px-5 items-center text-left max-w-60 py-2">
     <h2 className="text-md leading-6 font-semibold">{name}</h2>
     <h3 className="text-xs text-slate-400 ">{cuisines.join(", ")}</h3>
    <h4 className="py-4">{lastMileTravelString}</h4>
   </div>
   </div>
  );
 };

 export default Restaurantcard;