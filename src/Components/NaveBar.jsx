import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaClosedCaptioning, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import logo from "../assets/owl.png";
const Navbar = () => {
  const [nav, setNav] = useState(false);

  const menuItems = [
    { icon: <TbTruckDelivery size={25} className="mr-4" />, text: "Orders" },
    { icon: <MdFavorite size={25} className="mr-4" />, text: "Favorites" },
    { icon: <FaWallet size={25} className="mr-4" />, text: "Wallet" },
    { icon: <MdHelp size={25} className="mr-4" />, text: "Help" },
  ];

  return (
    <div className="flex justify-between items-center mx-auto p-4 shadow-sm ">
      {/* left side */}

      <div className="flex items-center">
        <div
          onClick={() => {
            setNav(!nav);
          }}
          className="cursor-pointer  sm:bg-purple-950 2xl:bg-red-800 xl:bg-green-700 lg:bg-blue-600 md:bg-yellow-500 "
        >
          <AiOutlineMenu size={30} />
        </div>

        <img src={logo} className="ml-4" style={{ height: "2rem", width: "2rem" }} />
      </div>

      {/* serch */}

      <div className="flex items-center rounded-full bg-gray-200 px-4 mx-14 grow    border border-3 hover:border-purple-600 hover:shadow-md    ">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent   p-2 w-full focus:outline-none  "
          type="text"
          placeholder="Search "
          id=""
        />
      </div>

      <button className="dog hidden sm:flex bg-black text-white items-center py-2 rounded-full slide-in px-5">
        name
      </button>

      {/* over */}

      <div
        onClick={() => {
          setNav(!nav);
        }}
        className={
          nav ? "fixed  top-0 left-0 bg-black/60 w-full h-screen z-5" : ""
        }
      ></div>

      {/* sidebar  */}

      <div
        className={
          nav
            ? "  fixed   top-0 left-0 h-screen lg:w-1/5 sm:w-2/5 min-w-40  border-2 rounded-xl bg-white border-purple-400  shadow-xlg duration-300  dog "
            : "hidden"
        }
      >
      
      
        <div className="flex items-center justify-center justify-between">
          <div>
            <img src={logo} className="h-10 m-5   animate-bounce " />
          </div>

          <div onClick={() => setNav(!nav)} 
            className="border-2 rounded-full m-3 hover:border-emerald-500  "
          >
            <AiOutlineClose className="m-1 transition delay-150 duration-150 ease-in-out " />
  
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
