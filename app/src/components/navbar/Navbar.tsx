import React from 'react'
import Logo from './Logo'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {

  const [isSidebarOpen, setIsSideBarOpen] = useState(false);

  const navItems = ["Home", "About", "Projects", "Contact"]


  const myNavItems = navItems.map((item, index) => (
    <li className="mx-5" key={index}>{item}</li>
  ))

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSidebarOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) { // Tailwind's `sm` breakpoint is 640px
        setIsSideBarOpen(false); // Reset the sidebar state when window width is >= 640px
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

   return (
    <div>
      <div className="border-solid border-2 flex justify-between max-sm:hidden">
        <Logo />
        <div>
          <ul className="flex p-5">
            {myNavItems}
          </ul>
        </div>
      </div>
      <div className="sm:hidden border-solid border-2 flex justify-betweenflex justify-between pr-5">
        <Logo />
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon icon={faBars} className="text-2xl" />
        </button>
      </div>
      {isSidebarOpen && (
        <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="sm:hidden fixed inset-y-0 right-0 bg-white w-64 p-5 flex flex-col">
            <button onClick={toggleSidebar} className="mb-5 self-end">
              <FontAwesomeIcon icon={faTimes} className="text-2xl" />
            </button> 
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-2 px-4 border-b">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar
