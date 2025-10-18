import React, { useState } from 'react'
import logo from '../assets/malabar.png'

const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
  <nav className='p-3 flex justify-between items-center'> 
    <a href="#" className='flex items-center gap-2'>
      <img src={logo} alt="" className='w-10 h-10'/>
      <span className='text-lg font-medium'>Malabar</span>
    </a>

    {/* menu for mobile */}
    <button className='text-3xl font-bold md:hidden' onClick={handleMenu}>
      ≡
    </button>

    {/* creating navbar for the breakpoint of md */}

    <ul className='md:flex hidden gap-6 font-medium'>
      <li>About</li>
      <li>Contact</li>
      <li>Home</li>
    </ul>
    

    <p className='hidden md:flex'>Search</p>
    
  </nav>
  )
}

export default Navbar;