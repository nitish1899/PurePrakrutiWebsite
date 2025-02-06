import React, { useState, useContext } from 'react';
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

  console.log("user",user)
  console.log("user id mila", userId)
  console.log("user Name mila", userName)
  
  const logout = authContext?.logout;
  const navigate = useNavigate();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-22 sticky top-0 z-50 w-screen shadow-md bg-green-800">
      <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:gap-12">
        <Link to="/" className="flex items-center">
          <img src={pure} alt="Pure Prakrti" className="h-full max-h-16 w-auto"/>
        </Link>
        <div className="hidden md:flex gap-4 lg:gap-6 text-sm sm:text-base items-center font-semibold text-white ml-auto">
          <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
          <Link to="/CarbonFootprint" className="hover:text-cyan-500 transition duration-300">Carbon Footprints</Link>
          {user && <Link to="/ViewChart" className="hover:text-cyan-500 transition duration-300">View Chart</Link>}
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


// import React, { useState, useEffect, useContext } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import pure from '../resource/pureprakrti.png';
// import { AuthContext } from "../AuthContext";

// export const Navbar = () => {

//   const { user, logout } = useContext(AuthContext);
//   const navigate = useNavigate();
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const userId = user?.userId; 
//   console.log(userId)


//   return (
//     <div className="h-22 sticky top-0 z-50 w-screen shadow-md bg-green-800">
//       <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:gap-12">
//         <Link to="/" className="flex items-center">
//           <img src={pure} alt="Pure Prakrti" className="h-full max-h-16 w-auto"/>
//         </Link>
//         <div className="hidden md:flex gap-4 lg:gap-6 text-sm sm:text-base items-center font-semibold text-white ml-auto">
//           <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
//           {/* <Link to="/about" className="hover:text-cyan-500 transition duration-300">About</Link> */}
//           <Link to="/CarbonFootprint" className="hover:text-cyan-500 transition duration-300">Carbon Footprints</Link>
//           {userProfile && <Link to="/ViewChart" className="hover:text-cyan-500 transition duration-300">View Chart</Link>}
//           <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300">Contact Us</Link>
//         </div>

//         <div className="hidden md:flex items-center gap-4 text-white">
//           <a href="tel:+91-9661829944" className="flex items-center text-base sm:text-lg hover:text-cyan-500 transition gap-2">
//             <FaPhoneAlt />
//             <span>Call +91-96618 29944</span>
//           </a>
//           {userProfile ? (
//             <div className="flex items-center gap-4">
//               <span className="text-sm font-semibold">Welcome, {userProfile.userName}</span>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={logout}>
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <>
//               <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700" onClick={() => navigate('/signup')}>
//                 Sign Up
//               </button>
//               <button className="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-200" onClick={() => navigate('/login')}>
//                 Log In
//               </button>
//             </>
//           )}
//         </div>

//         <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
//           <IoReorderThreeOutline size={30} />
//         </button>
//       </div>
      
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-green-800 text-white flex flex-col items-center py-4 gap-3">
//           <Link to="/" className="py-2 w-full text-center hover:text-cyan-500" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//           {/* <Link to="/about" className="py-2 w-full text-center hover:text-cyan-500" onClick={() => setMobileMenuOpen(false)}>About</Link> */}
//           <Link to="/CarbonFootprint" className="py-2 w-full text-center hover:text-cyan-500" onClick={() => setMobileMenuOpen(false)}>Carbon Footprints</Link>
//           {userProfile && <Link to="/ViewChart" className="py-2 w-full text-center hover:text-cyan-500" onClick={() => setMobileMenuOpen(false)}>View Chart</Link>}
//           <Link to="/contactUs" className="py-2 w-full text-center hover:text-cyan-500" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
//           <a href="tel:+91-9661829944" className="flex items-center text-lg hover:text-cyan-500 gap-2">
//             <FaPhoneAlt />
//             <span>Call +91-96618 29944</span>
//           </a>
//           {userProfile ? (
//             <div className="flex flex-col items-center gap-4">
//               <span className="text-sm font-semibold">Welcome, {userProfile.userName}</span>
//               <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700" onClick={logout}>
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <>
//               <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700" onClick={() => { setMobileMenuOpen(false); navigate('/signup'); }}>
//                 Sign Up
//               </button>
//               <button className="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-200" onClick={() => { setMobileMenuOpen(false); navigate('/login'); }}>
//                 Log In
//               </button>
//             </>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };



// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import pure from '../resource/pureprakrti.png';
// import Cookies from 'js-cookie';
// import { Alert } from '@chakra-ui/react';

// export const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   const [signUpFormData, setSignUpFormData] = useState({ userName: '', mobileNumber: '', pin: '' });
//   const [loginFormData, setLoginFormData] = useState({ mobileNumber: '', pin: '' });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userProfile, setUserProfile] = useState({ userName: '' });

//   const navigate = useNavigate();


//   useEffect(() => {
//     const userId = Cookies.get('userId');
//     const userName = Cookies.get('userName');
//     const mobileNumber = Cookies.get('mobileNumber');

//     if (userId && userName && mobileNumber) {
//       setIsLoggedIn(true);
//       setUserProfile({ userName });
//     }
//   }, []);

//   const handleInputChange = (e, setFormData, formData) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:4500/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signUpFormData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to sign up. Please try again.');
//       }

//       const data = await response.json();
//       setSuccessMessage('Sign up successful!');
//       alert('Sign up successful!');

//       setErrorMessage('');
//       setSignUpFormData({ userName: '', mobileNumber: '', pin: '' });
//       setSignUpModalOpen(false);
//       setLoginModalOpen(true);
//     } catch (error) {
//       setErrorMessage(error.message);
//       setSuccessMessage('');
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:4500/api/auth/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginFormData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to log in. Please try again.');
//       }

//       const responseData = await response.json();
//       const { userId, userName, mobileNumber } = responseData.data; // Extract data

//       setSuccessMessage('Login successful!');
//       setErrorMessage('');
//       setLoginFormData({ mobileNumber: '', pin: '' });
//       setLoginModalOpen(false);
//       setIsLoggedIn(true); // User logged in, set state to true
//       setUserProfile({ userName }); // Set user profile

//       // Store data in cookies
//       document.cookie = `userId=${userId}; path=/; max-age=86400`; // 1-day validity
//       document.cookie = `userName=${userName}; path=/; max-age=86400`;
//       document.cookie = `mobileNumber=${mobileNumber}; path=/; max-age=86400`;

//       window.location.reload();

//     } catch (error) {
//       setErrorMessage(error.message);
//       setSuccessMessage('');
//       console.error('Error during login:', error);
//     }
//   };

//   const handleLogout = () => {
//     // Remove cookies
//     Cookies.remove('userId');
//     Cookies.remove('userName');
//     Cookies.remove('mobileNumber');

//     // Reset the state
//     setIsLoggedIn(false);
//     setUserProfile({ userName: '' });
//     // navigate("/");
//     window.location.reload();
//   };

//   return (
//     <div className="h-22 sticky top-0 z-50 w-screen shadow-md bg-green-800 ">
//       {/* Navbar Container */}
//       <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:gap-12">
//         {/* Logo Section */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/" className="flex items-center">
//             <img src={pure} alt="pure prakurti" className="h-full max-h-16 w-auto" />
//           </Link>
//         </div>

//         {/* Desktop Links Section */}
//         <div className="hidden md:flex gap-4 lg:gap-6 text-sm sm:text-base items-center font-semibold text-black ml-auto">
//           <Link to="/" className="text-white hover:text-cyan-500 transition duration-300">Home</Link>
//           <Link to="/about" className="text-white hover:text-cyan-500 transition duration-300">About</Link>
//           <Link to="/CarbonFootprint" className="text-white hover:text-cyan-500 transition duration-300">Carbon Footprints</Link>

//           {isLoggedIn && <Link to="/ViewChart" className="text-white hover:text-cyan-500 transition duration-300">View Chart</Link>}

//           <Link to="/contactUs" className="text-white hover:text-cyan-500 transition duration-300 whitespace-nowrap">Contact Us</Link>
//         </div>

//         {/* Social Icons and Call Section */}
//         <div className="hidden md:flex items-center gap-4 lg:gap-5 ml-2">
//           <a href="tel:+91-9661829944" className="flex items-center text-white text-base sm:text-lg hover:text-cyan-500 transition gap-2">
//             <FaPhoneAlt />
//             <span className="whitespace-nowrap">Call +91-96618 29944</span>
//           </a>

//           {/* Conditionally render profile or sign-up/login buttons */}
//           {isLoggedIn ? (
//             <div className="flex items-center gap-4">
//               <span className="text-sm text-white font-semibold">Welcome {userProfile.userName}</span>
//               <button
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <>
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//                 onClick={() => setSignUpModalOpen(true)}
//               >
//                 Sign Up
//               </button>
//               <button
//                 className="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-200"
//                 onClick={() => setLoginModalOpen(true)}
//               >
//                 Log In
//               </button>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-white">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-green-800 text-white flex flex-col items-center py-4 gap-3">
//           <Link to="/" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
//             Home
//           </Link>
//           <Link to="/about" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
//             About
//           </Link>
//           <Link to="/CarbonFootprint" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
//             Carbon Footprints
//           </Link>
//           {isLoggedIn &&
//             <Link to="/ViewChart" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
//               View Chart
//             </Link>
//           }

//           <Link to="/contactUs" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
//             Contact Us
//           </Link>
//           <a href="tel:+91-9661829944" className="flex items-center text-lg hover:text-cyan-500 transition gap-2">
//             <FaPhoneAlt />
//             <span className="font-medium">Call +91-96618 29944</span>
//           </a>

//           {isLoggedIn ? (
//             <div className="flex items-center gap-4">
//               <span className="text-sm text-white font-semibold">Welcome, {userProfile.userName}</span>
//               <button
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <>
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//                 onClick={() => {
//                   setMobileMenuOpen(false);
//                   setSignUpModalOpen(true);
//                 }}
//               >
//                 Sign Up
//               </button>
//               <button
//                 className="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-gray-200"
//                 onClick={() => {
//                   setMobileMenuOpen(false);
//                   setLoginModalOpen(true);
//                 }}
//               >
//                 Log In
//               </button>
//             </>
//           )}
//         </div>
//       )}

//       {/* Sign Up Modal */}
//       {isSignUpModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>
//             {/* {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
//             {successMessage && <p className="text-green-500 text-center">{successMessage}</p>} */}
//             <form onSubmit={handleSignUp}>
//               <input
//                 type="text"
//                 name="userName"
//                 value={signUpFormData.userName}
//                 onChange={(e) => handleInputChange(e, setSignUpFormData, signUpFormData)}
//                 placeholder="Enter Name"
//                 className="w-full mb-4 p-3 border rounded"
//               />
//               <input
//                 type="number"
//                 name="mobileNumber"
//                 value={signUpFormData.mobileNumber}
//                 onChange={(e) => handleInputChange(e, setSignUpFormData, signUpFormData)}
//                 placeholder="Enter Mobile Number"
//                 className="w-full mb-4 p-3 border rounded"
//                 maxLength={10}
//               />
//               <input
//                 type="password"
//                 name="pin"
//                 value={signUpFormData.pin}
//                 onChange={(e) => handleInputChange(e, setSignUpFormData, signUpFormData)}
//                 placeholder="Enter Pin"
//                 className="w-full mb-4 p-3 border rounded"
//                 maxLength={4}
//               />
//               <button type="submit" className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700">
//                 Sign Up
//               </button>
//             </form>
//             <button
//               onClick={() => setSignUpModalOpen(false)}
//               className="mt-4 w-full text-red-600 p-3 rounded hover:bg-red-100"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Login Modal */}
//       {isLoginModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold text-center mb-4">Log In</h2>
//             {/* {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
//             {successMessage && <p className="text-green-500 text-center">{successMessage}</p>} */}
//             <form onSubmit={handleLogin}>
//               <input
//                 type="number"
//                 name="mobileNumber"
//                 value={loginFormData.mobileNumber}
//                 onChange={(e) => handleInputChange(e, setLoginFormData, loginFormData)}
//                 placeholder="Enter Mobile Number"
//                 className="w-full mb-4 p-3 border rounded"
//                 maxLength={10}
//               />
//               <input
//                 type="password"
//                 name="pin"
//                 value={loginFormData.pin}
//                 onChange={(e) => handleInputChange(e, setLoginFormData, loginFormData)}
//                 placeholder="Enter Pin"
//                 className="w-full mb-4 p-3 border rounded"
//                 maxLength={4}
//               />
//               <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
//                 Log In
//               </button>
//             </form>
//             <button
//               onClick={() => setLoginModalOpen(false)}
//               className="mt-4 w-full text-red-600 p-3 rounded hover:bg-red-100"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { FaPhoneAlt } from 'react-icons/fa';
// import { IoReorderThreeOutline } from 'react-icons/io5';
// import pure from '../resource/purePrakruti3.png';
// import Cookies from 'js-cookie';
// // const API_END_POINT = process.env.REACT_APP_API_END_POINT;

// export const Navbar = () => {
//   const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
//   const [isLoginModalOpen, setLoginModalOpen] = useState(false);
//   const [signUpFormData, setSignUpFormData] = useState({ userName: '', mobileNumber: '', pin: '' });
//   const [loginFormData, setLoginFormData] = useState({ mobileNumber: '', pin: '' });
//   const [errorMessage, setErrorMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);  // New state for login status
//   const [userProfile, setUserProfile] = useState({ userName: '' }); // Store user profile

//   useEffect(() => {
//     const userId = Cookies.get('userId');
//     const userName = Cookies.get('userName');
//     const mobileNumber = Cookies.get('mobileNumber');

//     if (userId && userName && mobileNumber) {
//       setIsLoggedIn(true);
//       setUserProfile({ userName });
//     }
//   }, []);

//   const handleInputChange = (e, setFormData, formData) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // console.log('REACT_APP_API_END_POINT', API_END_POINT);

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`https://pureprakruti.com/api/auth/signup`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(signUpFormData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to sign up. Please try again.');
//       }

//       const data = await response.json();
//       setSuccessMessage('Sign up successful!');
//       setErrorMessage('');
//       setSignUpFormData({ userName: '', mobileNumber: '', pin: '' });
//       setSignUpModalOpen(false);
//     } catch (error) {
//       setErrorMessage(error.message);
//       setSuccessMessage('');
//     }
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(`https://pureprakruti.com/api/auth/login`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginFormData),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to log in. Please try again.');
//       }

//       const responseData = await response.json();
//       const { userId, userName, mobileNumber } = responseData.data; // Extract data

//       setSuccessMessage('Login successful!');
//       setErrorMessage('');
//       setLoginFormData({ mobileNumber: '', pin: '' });
//       setLoginModalOpen(false);
//       setIsLoggedIn(true); // User logged in, set state to true
//       setUserProfile({ userName }); // Set user profile

//       // Store data in cookies
//       document.cookie = `userId=${userId}; path=/; max-age=86400`; // 1-day validity
//       document.cookie = `userName=${userName}; path=/; max-age=86400`;
//       document.cookie = `mobileNumber=${mobileNumber}; path=/; max-age=86400`;

//     } catch (error) {
//       setErrorMessage(error.message);
//       setSuccessMessage('');
//       console.error('Error during login:', error);
//     }
//   };
//   const handleLogout = () => {
//     // Remove cookies
//     Cookies.remove('userId');
//     Cookies.remove('userName');
//     Cookies.remove('mobileNumber');

//     // Reset the state
//     setIsLoggedIn(false);
//     setUserProfile({ userName: '' });
//   };

//   return (
//     <div className="h-24 sticky top-0 z-50 w-screen shadow-md bg-green-200 opacity-90">
//       {/* Navbar Container */}
//       <div className="flex items-center justify-between max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-3 lg:gap-12">
//         {/* Logo Section */}
//         <div className="flex items-center flex-shrink-0">
//           <Link to="/" className="flex items-center">
//             <img src={pure} alt="pure prakurti" className="h-full max-h-16 w-auto" />
//           </Link>
//         </div>

//         {/* Desktop Links Section */}
//         <div className="hidden md:flex gap-4 lg:gap-6 text-sm sm:text-base items-center font-semibold text-black ml-auto">
//           <Link to="/" className="hover:text-cyan-500 transition duration-300">Home</Link>
//           <Link to="/about" className="hover:text-cyan-500 transition duration-300">About</Link>
//           <Link to="/CarbonFootprint" className="hover:text-cyan-500 transition duration-300">Carbon Footprints</Link>
//           <Link to="/contactUs" className="hover:text-cyan-500 transition duration-300 whitespace-nowrap">Contact Us</Link>
//         </div>

//         {/* Social Icons and Call Section */}
//         <div className="hidden md:flex items-center gap-3 lg:gap-4 ml-2">
//           <a href="tel:+91-9661829944" className="flex items-center text-green-700 text-base sm:text-lg hover:text-green-900 transition gap-2">
//             <FaPhoneAlt />
//             <span className="whitespace-nowrap">Call +91-96618 29944</span>
//           </a>

//           {/* Conditionally render profile or sign-up/login buttons */}
//           {isLoggedIn ? (
//             <div className="flex items-center gap-4">
//               <span className="text-sm font-semibold">Welcome, {userProfile.userName}</span>
//               <button
//                 className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
//                 onClick={handleLogout}
//               >
//                 Logout
//               </button>
//             </div>
//           ) : (
//             <>
//               <button
//                 className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//                 onClick={() => setSignUpModalOpen(true)}
//               >
//                 Sign Up
//               </button>
//               <button
//                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//                 onClick={() => setLoginModalOpen(true)}
//               >
//                 Log In
//               </button>
//             </>
//           )}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="text-black">
//             <IoReorderThreeOutline size={30} />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-green-500 text-black flex flex-col items-center py-4 gap-3">
//           <Link to="/" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
//             Home
//           </Link>
//           <Link to="/about" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
//             About
//           </Link>
//           <Link to="/CarbonFootprint" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
//             Carbon Footprints
//           </Link>
//           <Link to="/contactUs" className="py-2 w-full text-center hover:text-cyan-500 transition duration-300" onClick={() => setMobileMenuOpen(false)}>
//             Contact Us
//           </Link>
//           <a href="tel:+91-9661829944" className="flex items-center text-green-700 text-lg hover:text-green-900 transition gap-2">
//             <FaPhoneAlt />
//             <span className="font-medium">Call +91-96618 29944</span>
//           </a>
//           <button
//             className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
//             onClick={() => {
//               setMobileMenuOpen(false);
//               setSignUpModalOpen(true);
//             }}
//           >
//             Sign Up
//           </button>
//           <button
//             className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
//             onClick={() => {
//               setMobileMenuOpen(false);
//               setLoginModalOpen(true);
//             }}
//           >
//             Log In
//           </button>
//         </div>
//       )}

//       {/* Sign Up Modal */}
//       {isSignUpModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold text-center mb-4">Sign Up</h2>
//             {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
//             {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
//             <form onSubmit={handleSignUp}>
//               <input
//                 type="text"
//                 name="userName"
//                 value={signUpFormData.userName}
//                 onChange={(e) => handleInputChange(e, setSignUpFormData, signUpFormData)}
//                 placeholder="Enter Name"
//                 className="w-full mb-4 p-3 border rounded"
//               />
//               <input
//                 type="text"
//                 name="mobileNumber"
//                 value={signUpFormData.mobileNumber}
//                 onChange={(e) => handleInputChange(e, setSignUpFormData, signUpFormData)}
//                 placeholder="Enter Mobile Number"
//                 className="w-full mb-4 p-3 border rounded"
//               />
//               <input
//                 type="password"
//                 name="pin"
//                 value={signUpFormData.pin}
//                 onChange={(e) => handleInputChange(e, setSignUpFormData, signUpFormData)}
//                 placeholder="Enter Pin"
//                 className="w-full mb-4 p-3 border rounded"
//               />
//               <button type="submit" className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700">
//                 Sign Up
//               </button>
//             </form>
//             <button
//               onClick={() => setSignUpModalOpen(false)}
//               className="mt-4 w-full text-red-600 p-3 rounded hover:bg-red-100"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Login Modal */}
//       {isLoginModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
//             <h2 className="text-xl font-semibold text-center mb-4">Log In</h2>
//             {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
//             {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}
//             <form onSubmit={handleLogin}>
//               <input
//                 type="text"
//                 name="mobileNumber"
//                 value={loginFormData.mobileNumber}
//                 onChange={(e) => handleInputChange(e, setLoginFormData, loginFormData)}
//                 placeholder="Enter Mobile Number"
//                 className="w-full mb-4 p-3 border rounded"
//               />
//               <input
//                 type="password"
//                 name="pin"
//                 value={loginFormData.pin}
//                 onChange={(e) => handleInputChange(e, setLoginFormData, loginFormData)}
//                 placeholder="Enter Pin"
//                 className="w-full mb-4 p-3 border rounded"
//               />
//               <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700">
//                 Log In
//               </button>
//             </form>
//             <button
//               onClick={() => setLoginModalOpen(false)}
//               className="mt-4 w-full text-red-600 p-3 rounded hover:bg-red-100"
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

