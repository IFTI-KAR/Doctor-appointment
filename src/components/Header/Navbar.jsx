import React, { useEffect, useState } from 'react';

import navlogo from "../../../public/logo.png"
import { Link, useLocation } from 'react-router';

const Navbar = () => {

  const location = useLocation();
  const [activeId, setActiveId] = useState('1');

  useEffect(() => {
      const path = location.pathname;
      if (path === '/') setActiveId('1');
      else if (path === '/my-bookings') setActiveId('2');
      else if (path === '/blogs') setActiveId('3');
      else if (path === '/contact') setActiveId('4');
  }, [location.pathname]);

  const currentNav = (id) => {
      setActiveId(id);
  };

  const links = (
      <>
          <Link to='/'>
              <li className={`m-2 ${activeId === '1' ? 'border-b' : ''}`}>
                  <button onClick={() => currentNav('1')}>Home</button>
              </li>
          </Link>
          <Link to='/my-bookings'>
              <li className={`m-2 ${activeId === '2' ? 'border-b' : ''}`}>
                  <button onClick={() => currentNav('2')}>My-Bookings</button>
              </li>
          </Link>
          <Link to='/blogs'>
              <li className={`m-2 ${activeId === '3' ? 'border-b' : ''}`}>
                  <button onClick={() => currentNav('3')}>Blogs</button>
              </li>
          </Link>
          <Link to='/contact'>
              <li className={`m-2 ${activeId === '4' ? 'border-b' : ''}`}>
                  <button onClick={() => currentNav('4')}>Contact Us</button>
              </li>
          </Link>
      </>
  );
    return (
<div className="navbar bg-[#EFEFEF] ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src={navlogo} alt="" />Phudu</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#176AE5] rounded-full text-white">Emergency</a>
  </div>
</div>
    );
};

export default Navbar;