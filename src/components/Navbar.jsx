//creating responsive navbar
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";
const Navbar = () =>{
  const [isOpen,setIsOpen] = useState(false);
  const menuHandler = () => setIsOpen(!isOpen);
 return (
  <nav className="flex items-center justify-around p-2 bg-black text-white ">
    <h1 className="text-2xl">WorldAtlas</h1>


    <div className="hidden md:flex gap-4 cursor-pointer text-lg font-bold">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/country">Country</a>
      <a href="/contact">Contact</a>
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