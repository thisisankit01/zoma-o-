import { useState } from "react";
import { Link } from "react-router-dom"; //its bts use anchor tag cause browser understands that

const Title = () =>{
  return(
    <div>
  <h1 id="title" key="h2" className="font-extrabold">
    <a href="/">Zoma'o'</a>
  </h1>
  <p className="text-sm font-extralight text-slate-400">The British Restaurant</p>
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
      <a className="hover:cursor-pointer my-auto max-sm:hidden">
        <svg xmlns="http://www.w3.org/2000/svg"
         width="24"
          height="24"
           className="text-white" 
           viewBox="0 0 24 24">
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg></a>
      <a className="pt-2 sm:hidden">
        <button data-collapse-toggle="navbar-mobile" className="py-2 bg-red-500 px-4 rounded-md text-white "><svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg></button></a>
        </div>
    </div>
  );
};

export default Header;