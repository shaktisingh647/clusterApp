//creating responsive navbar
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () =>{
  const [isOpen,setIsOpen] = useState(false);
  const menuHandler = () => setIsOpen(!isOpen);
 return (
  <nav className="flex items-center justify-around p-4 bg-stone-900 text-white ">
    
     <NavLink to="/"><h1 className="text-2xl cursor-pointer">WorldAtlas</h1></NavLink>

    <div className=" hidden md:flex gap-4 cursor-pointer text-lg font-bold">
      
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/country">Country</NavLink>
      <NavLink to="contact">Contact</NavLink>
    </div>

    <button className="md:hidden cursor-pointer" onClick={menuHandler}><GiHamburgerMenu/></button>

    {isOpen && (
      <div className=" flex flex-col items-center pt-40 gap-5 fixed right-0 text-black top-0 bg-white w-64 h-full gap-4 cursor-pointer text-lg font-bold">
        <button className="cursor-pointer absolute top-5 right-5" onClick={menuHandler}><IoCloseSharp /></button>
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/country">Country</a>
      <a href="/contact">Contact</a>
    </div>
    )}
    
  </nav>
 )
}

export default Navbar;