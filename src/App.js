import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Navbar } from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Home1 } from "./pages/Home1";
import { Booking } from "./pages/Booking";
import { ContactUs } from "./pages/ContactUs";
import { Product } from "./pages/Product";
import { AboutUs } from "./pages/AboutUs";
import { Footer } from "./components/Footer";
import SocialMedia from "./pages/SocialMedia";
import PaymentSuccess from "./pages/paymentSuccess";
import Distrubuter from "./pages/Distrubuter";
import { MissionVision } from "./components/MissionVision";
import { Service } from "./pages/Service";
import VehicleAnimation from "./components/VehicleAnimation";
import { CarbonFootprint } from "./pages/CarbonFootprint";
import { ViewChart } from "./pages/ViewChart";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state
  const media = { mobile: "768px", tab: "998px" };

  // Check if the user is logged in by looking for the user ID in cookies
  useEffect(() => {
    const userId = Cookies.get("userId"); // Get the userId from cookies
    if (userId) {
      setIsLoggedIn(true); // User is logged in
    }
  }, []);

  // Function to handle login and set user ID in cookies
  const handleLogin = (userId) => {
    Cookies.set("userId", userId, { expires: 7 });
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home1 /> : <Home />} />
        <Route path="/product" element={<Product />} />
        {/* <Route path="/about" element={<AboutUs />} /> */}
        <Route path="/service" element={<Service />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/distribution" element={<Distrubuter />} />
        <Route path="/socialmedia" element={<SocialMedia />} />
        <Route path="/MissionVision" element={<MissionVision />} />
        <Route path="/VehicleAnimation" element={<VehicleAnimation />} />
        <Route path="/CarbonFootprint" element={<CarbonFootprint />} />
        <Route path="/ViewChart" element={<ViewChart />} />
      </Routes>
      <Footer />

      {/* Example of a simple login button that triggers the handleLogin function */}
      {/* {!isLoggedIn && (
        <div>
          <button onClick={() => handleLogin("someUserId")}>Log In</button>
        </div>
      )} */}
    </div>
  );
};

export default App;