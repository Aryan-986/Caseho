import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { assets } from '../assets/assets';
import { HiMenu } from 'react-icons/hi'; // Hamburger icon from react-icons

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button for small devices */}
      <div className="md:hidden flex items-top p-4 border-b border-gray-300">
        <HiMenu size={25} onClick={() => setIsOpen(!isOpen)} className="cursor-pointer" />
      </div>

      {/* Sidebar */}
      <div
        className={`
          fixed top-0 left-0 h-full bg-white border-r-2 z-50
          w-[70%] sm:w-[50%] md:w-[18%] 
          transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          md:relative md:translate-x-0
        `}
      >
        <div className="flex flex-col gap-4 pt-6 pl-6 text-[15px]">
          <NavLink
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
            to="/add"
            onClick={() => setIsOpen(false)} // close on click
          >
            <img className="w-5 h-5" src={assets.add_icon} alt="" />
            <p className="hidden md:block">Add Items</p>
          </NavLink>

          <NavLink
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
            to="/list"
            onClick={() => setIsOpen(false)}
          >
            <img className="w-5 h-5" src={assets.order_icon} alt="" />
            <p className="hidden md:block">List Items</p>
          </NavLink>

          <NavLink
            className="flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-l"
            to="/orders"
            onClick={() => setIsOpen(false)}
          >
            <img className="w-5 h-5" src={assets.order_icon} alt="" />
            <p className="hidden md:block">Orders</p>
          </NavLink>
        </div>
      </div>

      {/* Overlay when sidebar is open on small devices */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
