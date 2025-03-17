import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

  const logout = () => {
    navigate('/login');
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
  };

  return (
    <>
      <div className='flex items-center justify-between py-5 font-medium relative z-50 bg-white'>
        <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

        {/* Desktop Navigation */}
        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
          <NavLink to='/' className='flex flex-col items-center gap-1'>
            <p>HOME</p>
          </NavLink>
          <NavLink to='/collection' className='flex flex-col items-center gap-1'>
            <p>COLLECTION</p>
          </NavLink>
          <NavLink to='/about' className='flex flex-col items-center gap-1'>
            <p>ABOUT</p>
          </NavLink>
          <NavLink to='/orders' className='flex flex-col items-center gap-1'>
            <p>ORDERS</p>
          </NavLink>
        </ul>

        {/* Right Section (Icons) */}
        <div className='flex items-center gap-6'>
          <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

          <div className='group relative'>
            <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
            {token && (
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                  <p className='cursor-pointer hover:text-black'>My Profile</p>
                  <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-black'>Orders</p>
                  <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                </div>
              </div>
            )}
          </div>

          <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
          </Link>

          {/* Mobile Menu Icon */}
          <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
        </div>
      </div>

      {/* Sidebar Menu for Mobile (Full-Screen Overlay) */}
      <div className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 transition-transform duration-300 ${visible ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='absolute top-0 right-0 w-3/4 max-w-xs h-full bg-white shadow-lg transition-transform duration-300 p-5 flex flex-col'>
          {/* Close Button */}
          <div onClick={() => setVisible(false)} className='flex items-center gap-4 cursor-pointer mb-6'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Close" />
            <p>Close</p>
          </div>

          {/* Mobile Menu Links */}
          <NavLink onClick={() => setVisible(false)} className='py-3 border-b text-gray-600' to='/'>HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 border-b text-gray-600' to='/collection'>COLLECTION</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 border-b text-gray-600' to='/about'>ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className='py-3 border-b text-gray-600' to='/orders'>ORDER</NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
