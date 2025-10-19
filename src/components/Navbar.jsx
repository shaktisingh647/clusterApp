import React, { useState } from 'react'
import logo from '../assets/malabar.png'

// const Navbar = () => {
//   const [menuOpen,setMenuOpen] = useState(false);
//   const handleMenu = () => {
//     setMenuOpen(!menuOpen);
//   }
//   return (
//   <nav className='p-3 flex justify-between items-center bg-white shadow-sm'> 
//     <a href="#" className='flex items-center gap-2'>
//       <img src={logo} alt="" className='w-10 h-10'/>
//       <span className='text-lg font-medium'>Malabar</span>
//     </a>

    

//     {/* creating navbar for the breakpoint of md */}

//     <ul className='md:flex hidden gap-6 text-lg font-medium cursor-pointer'>
//       <li>Pricing</li>
//       <li>Docs</li>
//       <li>Changelog</li>
//       <li>Blog</li>
//       <li>Login</li>
//     </ul>
    

//     <p className='hidden md:flex'>Search</p>
//     {/* menu for mobile */}
//     <button className='text-3xl font-bold md:hidden cursor-pointer' onClick={handleMenu}>
//       ≡
//     </button>



//     {menuOpen && (
//   <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6 text-lg font-medium">
//     <button className="text-2xl self-end" onClick={handleMenu}>×</button>
//     <a>Pricing</a>
//     <a>Docs</a>
//     <a>Changelog</a>
//     <a>Blog</a>
//     <a>Login</a>
//   </div>
// )}

//   </nav>
//   )
// }

// export default Navbar;


//creating responsive navbar

const Navbar = () =>{
  const [openMenu,setOpenMenu] = useState(false);
  const handleMenu = () =>{
  setOpenMenu(!openMenu);
  }
  return (
  <nav className='p-3 flex justify-between items-center'>
    <img src={logo} alt="" className='h-10 w-10'/>

    <ul className='hidden md:flex gap-6 text-lg font-medium cursor-pointer'>
      <li>About</li>
      <li>Home</li>
      <li>Services</li>
      <li>Contact</li>
    </ul>

    <button className='cursor-pointer md:hidden' onClick={handleMenu}>☰</button>
    

    {/* mobile menu */}
    {openMenu && (
      <div className='fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 flex flex-col gap-6 text-lg font-medium'>
        <button className='text-2xl self-end cursor-pointer' onClick={handleMenu}>×</button>
        <a href="">About</a>
        <a href="">Home</a>
        <a href="">Services</a>
        <a href="">Contact</a>
      </div>
    )}
    <button className='hidden md:flex'>Search</button>
  </nav>
  )
}

export default Navbar;