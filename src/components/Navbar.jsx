import React, { useState, useContext,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5';
import pure from '../resource/pureprakrti.png';
import { AuthContext } from "../AuthContext";

export const Navbar = () => {
  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const userId = user?.userId;
  const userName = user?.userName;

  // console.log("user", user)
  // console.log("user id mila", userId)
  // console.log("user Name mila", userName)


  useEffect(() => {
    const handleFocus = () => {
      console.log("Page focused, reloading...");
      window.location.reload();
    };

    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  const logout = authContext?.logout;
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-22 sticky top-0 z-50 w-screen shadow-md bg-green-800">
      <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:gap-12">
        <Link to="/" className="flex items-center">
          <img src={pure} alt="Pure Prakrti" className="h-full max-h-16 w-auto" />
        </Link>
        <div className="hidden md:flex gap-4 lg:gap-6 text-sm sm:text-base items-center font-semibold text-white ml-auto">
          <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
          <Link to="/CarbonFootprint" className="hover:text-cyan-500 transition duration-300">Carbon Footprints</Link>
          {user && <Link to="/Dashboard" className="hover:text-cyan-500 transition duration-300">Dashboard</Link>}
          <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300">Contact Us</Link>
        </div>

        <div className="hidden md:flex items-center gap-4 text-white">
          <a href="tel:+91-9661829944" className="flex items-center text-base sm:text-lg hover:text-cyan-500 transition gap-2">
            <FaPhoneAlt />
            <span>Call +91-96618 29944</span>
          </a>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold">Welcome, {user.userName}</span>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700" onClick={() => navigate('/signup')}>
                Sign Up
              </button>
              <button className="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-200" onClick={() => navigate('/login')}>
                Log In
              </button>
            </>
          )}
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
          <IoReorderThreeOutline size={30} />
        </button>
      </div>
    </div>
  );
};
