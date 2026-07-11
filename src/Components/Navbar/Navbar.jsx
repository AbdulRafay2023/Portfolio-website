import React from "react";
import { Link } from "react-scroll";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-6">
      {/* Logo / Name */}
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
          About
        </li>
        <li className="cursor-pointer hover:text-purple-500 transition duration-300">
          Skills
        </li>
        <li className="cursor-pointer hover:text-purple-500 transition duration-300">
          Projects
        </li>
        <li className="cursor-pointer hover:text-purple-500 transition duration-300">
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;