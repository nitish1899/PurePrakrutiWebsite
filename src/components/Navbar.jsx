import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaPhoneAlt } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';

import pure from '../resource/purePrakruti3.png';

export const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-24 sticky top-0 z-50 w-screen shadow-md bg-green-200 opacity-90">
      {/* Navbar Container */}
      <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        
        {/* Logo Section */}
        <div className="flex items-center flex-shrink-0 ">
          <Link to="/" className="flex items-center">
          <img
            src={pure}
            alt="pure prakurti"
            className="h-full max-h-20 w-auto"  
          />
          </Link>
        </div>

        {/* Desktop Links Section */}
        <div className="hidden md:flex gap-4 lg:gap-8 text-sm sm:text-base items-center font-semibold text-black ml-auto">
          <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-cyan-500 transition duration-300">About</Link>
          <Link to="/service" className="hover:text-cyan-500 transition duration-300">Carbon Footprints</Link>
          <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300 whitespace-nowrap">
            Contact Us
          </Link>
        </div>

        {/* Social Icons and Call Section */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-8 end-0">
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Start Tracking
          </button>
          <a
            href="tel:+91 96618 29944"
            className="flex items-center text-green-700 text-base sm:text-lg hover:text-green-900 transition gap-2 "
          >
            <FaPhoneAlt />
            <span className="whitespace-nowrap">Call +91 96618 29944</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
            <IoReorderThreeOutline size={30} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-green-500 text-black flex flex-col items-center py-4 gap-3">
          <Link
            to="/"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/service"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Service
          </Link>
          <Link
            to="/contactUs"
            className="py-2 w-full text-center hover:text-cyan-500 transition duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
          <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
            Start Tracking
          </button>
          <a
            href="tel:+919999966177"
            className="flex items-center text-green-700 text-lg hover:text-green-900 transition gap-2"
          >
            <FaPhoneAlt />
            <span className="font-medium">Call +91-9999966177</span>
          </a>
        </div>
      )}
    </div>
  );
};
