import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider, AuthContext } from "./AuthContext";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import GoogleAuthCallback from "./components/GoogleAuthCallback";
import { Home } from "./pages/Home";
import { Home1 } from "./pages/Home1";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CarbonFootprint } from "./pages/CarbonFootprint";
import { ViewChart } from "./pages/ViewChart";
import { ContactUs } from "./pages/ContactUs";

function App() {
  return (
    <Router>
      <AuthProvider> {/* ✅ Moved inside Router */}
        <Navbar />
        <MainRoutes />
        <Footer />
      </AuthProvider>
    </Router>
  );
}

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AuthContext); // ✅ Get isLoggedIn state

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Home1 /> : <Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
      <Route path="/CarbonFootprint" element={<CarbonFootprint />} />
      <Route path="/ViewChart" element={<ViewChart />} />
      <Route path="/ContactUs" element={<ContactUs />} />
    </Routes>
  );
};

export default App;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import GoogleAuthCallback from "./components/GoogleAuthCallback"; 

// import { Home } from "./pages/Home";
// import { Home1 } from "./pages/Home1";
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";

// import { CarbonFootprint } from "./pages/CarbonFootprint";
// import { ViewChart } from "./pages/ViewChart";
// import { ContactUs } from "./pages/ContactUs";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
//     console.log("User ID from local storage:", userId);
//     if (userId) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   return (
//     <Router>
//       <AuthProvider>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={isLoggedIn ? <Home1 /> : <Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />
//           <Route path="/CarbonFootprint" element={<CarbonFootprint />} />
//           <Route path="/ViewChart" element={<ViewChart />} />
//           <Route path="/ContactUs" element={<ContactUs />} />
//         </Routes>
//       </AuthProvider>
//       <Footer />
//     </Router>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import GoogleAuthCallback from "./components/GoogleAuthCallback"; 

// import { Home } from "./pages/Home";
// import { Home1 } from "./pages/Home1";
// import { Navbar } from "./components/Navbar";
// import { Footer } from "./components/Footer";

// import { CarbonFootprint } from "./pages/CarbonFootprint";
// import { ViewChart } from "./pages/ViewChart";
// import { ContactUs } from "./pages/ContactUs";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

//   // Check if the user is logged in by looking for the user ID in local storage
//   useEffect(() => {
//     const userId = localStorage.getItem("userId"); // Get the userId from local storage
//     console.log("ye rha tera userid", userId)
//     if (userId) {
//       setIsLoggedIn(true); // User is logged in
//     }
//   }, []);

//   return (
//     <Router>
//       <AuthProvider>
//       <Navbar />
//         <Routes>
//           <Route path="/" element={isLoggedIn ? <Home1 /> : <Home />} />
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/auth/google/callback" element={<GoogleAuthCallback />} />

//           <Route path="/CarbonFootprint" element={<CarbonFootprint />} />
//           <Route path="/ViewChart" element={<ViewChart />} />
//           <Route path="/ContactUs" element={<ContactUs />} />

//         </Routes>
//       </AuthProvider>
//       <Footer />
//     </Router>
//   );
// }

// export default App;



// import React, { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import { Navbar } from "./components/Navbar";
// import { Route, Routes } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Home1 } from "./pages/Home1"; 
// import { Booking } from "./pages/Booking";
// import { ContactUs } from "./pages/ContactUs";
// import { Product } from "./pages/Product";
// import { AboutUs } from "./pages/AboutUs";
// import { Footer } from "./components/Footer";
// import SocialMedia from "./pages/SocialMedia";
// import PaymentSuccess from "./pages/paymentSuccess";
// import Distrubuter from "./pages/Distrubuter";
// import { MissionVision } from "./components/MissionVision";
// import { Service } from "./pages/Service";
// import VehicleAnimation from "./components/VehicleAnimation";
// import { CarbonFootprint } from "./pages/CarbonFootprint";
// import { ViewChart } from "./pages/ViewChart";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state


//   // Check if the user is logged in by looking for the user ID in cookies
//   useEffect(() => {
//     const userId = Cookies.get("userId"); // Get the userId from cookies
//     if (userId) {
//       setIsLoggedIn(true); // User is logged in
//     }
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={isLoggedIn ? <Home1 /> : <Home />} /> 
//         <Route path="/product" element={<Product />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/service" element={<Service />} />
//         <Route path="/booking" element={<Booking />} />
//         <Route path="/ContactUs" element={<ContactUs />} />
//         <Route path="/paymentsuccess" element={<PaymentSuccess />} />
//         <Route path="/distribution" element={<Distrubuter />} />
//         <Route path="/socialmedia" element={<SocialMedia />} />
//         <Route path="/MissionVision" element={<MissionVision />} />
//         <Route path="/VehicleAnimation" element={<VehicleAnimation />} />
//         <Route path="/CarbonFootprint" element={<CarbonFootprint />} />
//         <Route path="/ViewChart" element={<ViewChart />} />
//         <Route path="/Login" element={<Login />} />
//         <Route path="/Signup" element={<Signup />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;



// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./AuthContext";
// import Signup from "./components/Signup";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import GoogleAuthCallback from "./components/GoogleAuthCallback"; // Import callback page

// function App() {
//   return (
    
//     <Router>
//       <AuthProvider>
//         <Routes>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/auth/google/callback" element={<GoogleAuthCallback />} /> {/* New route */}
//         </Routes>
//       </AuthProvider>
//     </Router>
//   );
// }

// export default App;