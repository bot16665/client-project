// src/components/Navbar.jsx
import React, { useState } from "react";
import logo from "../assets/logo.png"; // your Anas Shaikh logo
// import shopIcon from "../assets/shop.png"; // your cart/shop icon

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="px-4 sm:px-6 md:px-16 py-4 flex items-center justify-between relative bg-black text-white top-xl">
      {/* Mobile - Centered Logo */}
      <div className="md:hidden w-full flex justify-center">
        <img
          src={logo}
          alt="Anas Shaikh"
          className=" sm:w-50 sm:h-20" // Bigger size for mobile
        />
      </div>

      {/* Desktop - Left Logo */}
      <img
        src={logo}
        alt="Anas Shaikh"
        className="hidden md:block w-40 h-30 md:w-80 md:h-40"
      />

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-12 text-lg md:text-xl font-medium">
        <li>
          <a href="#home" className="hover:text-gray-300">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:text-gray-300">About</a>
        </li>
        <li>
          <a href="#books" className="hover:text-gray-300">Books</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-gray-300">Contact</a>
        </li>
      </ul>

    </nav>
  );
};

export default Navbar; 