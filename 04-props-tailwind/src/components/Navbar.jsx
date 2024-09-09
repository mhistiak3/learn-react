// src/components/Navbar.js
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-10 top-0 bg-purple-700 bg-opacity-90 text-white p-4 shadow-md transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold">
          iA Coder
        </a>
        <button className="block md:hidden" onClick={toggleMenu}>
          <i className="fas fa-bars text-white"></i>
        </button>
        <div
          className={`md:flex space-x-6 items-center ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <a href="#home" className="hover:text-gray-200">
            Home
          </a>
          <a href="#about" className="hover:text-gray-200">
            About
          </a>
          <a href="#services" className="hover:text-gray-200">
            Services
          </a>
          <a href="#contact" className="hover:text-gray-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
