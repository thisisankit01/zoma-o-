import { useState } from "react";
import { Link } from "react-router-dom"; //its bts use anchor tag cause browser understands that

const Title = () =>{
  return(
    <div>
  <h1 id="title" key="h2" className="font-extrabold">
    <a href="/">Zoma'o'</a>
  </h1>
  <p className="text-sm font-extralight text-slate-600">The British Restaurant</p>
  </div>
  );
};

const Header = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <div className="grid grid-flow-col justify-items-center py-3 border-solid shadow-md">
      <Title />
      <div className="nav-item flex pt-5 max-sm:hidden">
        <ul className="flex flex-row">
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact</Link></li>
        </ul> 
     </div>  
         <div className="grid grid-flow-col space-x-8">
         {
            isLoggedIn ? (
              
               <div className="pt-2 max-sm:hidden">
                <button className="py-3 bg-red-500 px-4 rounded-md text-white"
                 onClick={()=> setIsLoggedIn(false)}>
                  Logout
                  </button>
                  </div>
            ) : (
               <div className="pt-2 max-sm:hidden">
                <button className="py-3 bg-red-500 px-4 rounded-md text-white"
                 onClick={()=> setIsLoggedIn(true)}>
                  Login
                  </button>
                  </div>
            )
          }


        <button className="py-3 mx-2 focus:outline-none block md:hidden sm:hidden bg-red-500 px-4 rounded-md text-white group">
            <div className="w-5 h-[0.15rem] bg-white mb-1"></div>
            <div className="w-5 h-[0.15rem] bg-white mb-1"></div>
            <div className="w-5 h-[0.15rem] bg-white"></div>
            <div
              className="absolute top-20 h-screen bg-white border w-8/12 
                  transform group-focus:right-0 group-focus:opacity-100 transition-all duration-300 opacity-0">
                  <ul className="flex flex-col items-center w-full text-base cursor-pointer pt-10">
                    <li className="hover:bg-white text-slate-800 py-4 px-6 w-full"><Link to="/">Home</Link></li>
                    <li className="hover:bg-white text-slate-800 py-4 px-6 w-full"><Link to="/about">About Us</Link></li>
                    <li className="hover:bg-white text-slate-800 py-4 px-6 w-full"><Link to="/contact">Contact</Link></li>
                    <li className="hover:bg-white text-slate-800 py-4 px-6 w-full">
                    {
                        isLoggedIn ? (
                        
                            <button className="py-3 bg-red-500 px-10 rounded-md text-white"
                            onClick={()=> setIsLoggedIn(false)}>
                              Logout
                              </button>
                        ) : (
                            <button className="py-3 bg-red-500 px-10 rounded-md text-white"
                            onClick={()=> setIsLoggedIn(true)}>
                              Login
                              </button>
                        )
                    }
                    </li>
                  </ul>
            </div>
        </button>
      
        </div>
    </div>
  );
};

export default Header;