import React, { useState } from 'react';
import { FiPhoneCall, FiMenu, FiX } from 'react-icons/fi';
import { TbMenu3 } from "react-icons/tb";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = ["SERVICES", "WORKS", "NOTES", "EXIPERIENCE"];

  return (
    <div className=" bg-[#fefcf9] font-sans px-4 sm:px-8 md:px-20 py-8">
      {/* Top Navigation */}
      <div className="flex justify-between items-center text-sm md:text-base max-sm:border-b-2 pb-2">
        <div className="logo text-xl font-bold">IKRAM</div>

        {/* Centered Nav Items */}
        <div className="hidden md:flex flex-1 justify-center gap-10 items-center">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-gray-600 hover:text-teal-600 group font-medium"
            >
              {item}
              <span className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[25px]">
                (
              </span>
              <span className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[25px]">
                )
              </span>
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-700 text-2xl bg-white box-shadow p-2 rounded-2xl">
            {menuOpen ? <FiX /> : <TbMenu3 />}
          </button>
        </div>

        {/* Right Side Contact */}
        <div className="hidden md:flex items-center gap-4 text-sm text-gray-800 font-medium">
          <span>+880 1776703315</span>
        <a href="https://wa.me/+8801776703315"> <FaWhatsapp
className='text-gray-700 text-2xl font-black bg-white box-shadow p-1 rounded-2xl' /></a> 
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 hover:text-teal-600 text-base font-medium border-b pb-2"
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-2 text-sm text-gray-800 font-medium mt-4">
            <span>+880 1776703315</span>
           <a href="https://wa.me/+8801776703315"> <FaWhatsapp
className='text-gray-700 text-2xl font-black bg-white box-shadow p-1 rounded-2xl' /></a> 
          </div>
        </div>
      )}

      {/* Hero Content */}
    </div>
  );
};

export default Header;
