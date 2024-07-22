import React from 'react'
import Logo from './Logo'



const Navbar = () => {

  const navItems = ["Home", "About", "Projects", "Contact"]


  const myNavItems = navItems.map((item, index) => (
    <li className="mx-5" key={index}>{item}</li>
  ))

  return (
    <div>
      <div className="border-solid border-2 flex justify-between max-sm:hidden">
      <Logo/>
        <div>
        <ul className='flex p-5'>
          {myNavItems}
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
