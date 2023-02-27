import { useState } from "react";
import { Link } from "react-router-dom"; //its bts use anchor tag cause browser understands that
import cartImage from "/src/images/cartImage.png";

const Title = () => {
  return (
    <div>
      <h1 id="title" key="h2" className="font-extrabold">
        <a href="/">Zoma'o'</a>
      </h1>
      <p className="text-sm font-extralight text-slate-600">
        The British Restaurant
      </p>
    </div>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="grid grid-flow-col justify-items-center py-3 border-solid shadow-md">
      <Title />
      <div className="nav-item flex pt-5 max-sm:hidden">
        <ul className="flex flex-row">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="grid grid-flow-col space-x-8">
        {isLoggedIn ? (
          <div className="pt-2 max-sm:hidden">
            <button
              className="py-3 bg-red-500 px-4 rounded-md text-white"
              onClick={() => setIsLoggedIn(false)}
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="pt-2 max-sm:hidden">
            <button
              className="py-3 bg-red-500 px-4 rounded-md text-white"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </button>
          </div>
        )}

        <button className="max-sm:hidden my-auto">
          <img src={cartImage} alt="" />
        </button>

        <div className="relative">
          <button
            className="py-3 mx-2 focus:outline-none block md:hidden sm:hidden bg-red-500 px-4 rounded-md text-white group"
            onClick={toggleMenu}
          >
            <div className="w-5 h-[0.15rem] bg-white mb-1"></div>
            <div className="w-5 h-[0.15rem] bg-white mb-1"></div>
            <div className="w-5 h-[0.15rem] bg-white"></div>
          </button>
          <div
            className={`fixed inset-0 ${showMenu ? "z-10" : "hidden"}`}
            onClick={toggleMenu}
          >
            <div
              className="absolute inset-0 bg-gray-900 opacity-50"
              onClick={toggleMenu}
            ></div>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <div className="bg-white rounded-md shadow-lg w-48">
                <ul className="text-center divide-y divide-gray-200">
                  <li className="py-2 px-4 cursor-pointer">
                    <Link to="/" onClick={toggleMenu}>
                      Home
                    </Link>
                  </li>
                  <li className="py-2 px-4 cursor-pointer">
                    <Link to="/about" onClick={toggleMenu}>
                      About Us
                    </Link>
                  </li>
                  <li className="py-2 px-4 cursor-pointer">
                    <Link to="/contact" onClick={toggleMenu}>
                      Contact
                    </Link>
                  </li>
                  <li className="py-2 px-4 cursor-pointer">
                    {isLoggedIn ? (
                      <button
                        className="py-2 bg-red-500 px-4 rounded-md text-white"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        Logout
                      </button>
                    ) : (
                      <button
                        className="py-2 bg-red-500 px-4 rounded-md text-white"
                        onClick={() => setIsLoggedIn(true)}
                      >
                        Login
                      </button>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
