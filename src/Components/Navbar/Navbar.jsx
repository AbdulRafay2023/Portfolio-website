import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
const Navbar = () => {

  const [isScroll,setIsScroll] = useState(false);
  const handleScroll = () =>{
    setIsScroll(window.scrollY > 200)
  }

  useEffect(()=>{
    handleScroll()
    window.addEventListener('scroll', handleScroll);
    return ()=> window.removeEventListener('scroll', handleScroll);
  },[])

  return (
     <nav className= {`fixed top-0 left-0 w-full bg-[#1a0216] flex items-center justify-between px-12 py-6 transition-all duration-300 ${isScroll ? "bg-[#1a0216]" :"bg-[#120018]/80 backdrop-blur-md shadow-lg"}`}>      {/* Logo / Name */}
      <div>
        <h1 className="text-3xl font-bold text-white tracking-wide">
          Abdul <span className="text-purple-500">Rafay</span>
        </h1>
      </div>

      {/* Navigation */}
      <ul className="flex items-center gap-10 text-white font-medium">
        <li className="cursor-pointer hover:text-purple-500 transition duration-300">
          <Link>Home</Link>
        </li>
        <li className="cursor-pointer hover:text-purple-500 transition duration-300">
          <Link>Skills</Link>
        </li>
        <li className="cursor-pointer hover:text-purple-500 hover:underline transition duration-300">
          <Link>Projects</Link>
        </li>
        <li className="cursor-pointer hover:text-purple-500 transition duration-300">
          <Link>Experience</Link>
        </li>
        <li className="cursor-pointer hover:text-purple-500 transition duration-300">
          <Link>Certificates</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;