import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");

  // Logout function
  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("userName");

    setUser(null);
    setToken("");
    setIsLoggedIn(false);
    setUserId("");
    setUserName("");

    navigate("/login");
  }, [navigate]);

  // Check token validity and update state
  useEffect(() => {
    if (token) {
      try {
        const decodedUser = jwtDecode(token);
        
        if (decodedUser?.userId && decodedUser?.userName) {
          setUser(decodedUser);
          setIsLoggedIn(true);
          setUserId(decodedUser.userId);
          setUserName(decodedUser.userName);
        } else {
          throw new Error("Invalid token structure");
        }
      } catch (error) {
        console.error("Invalid token:", error);
        logout();
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, [token, logout]);

  // Signup function
  const signup = async (userData) => {
    try {
      const res = await axios.post("http://localhost:5000/signup", userData);
      alert(res.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      const res = await axios.post("http://localhost:5000/login", credentials);
      const { token } = res.data;

      if (!token) throw new Error("No token received");

      const decodedUser = jwtDecode(token);
      if (!decodedUser?.userId || !decodedUser?.userName) throw new Error("Invalid token data");

      localStorage.setItem("token", token);
      localStorage.setItem("userId", decodedUser.userId);
      localStorage.setItem("userName", decodedUser.userName);

      setToken(token);
      setUser(decodedUser);
      setIsLoggedIn(true);
      setUserId(decodedUser.userId);
      setUserName(decodedUser.userName);

      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  // Google Login function
  const googleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoggedIn,
        setIsLoggedIn,
        logout,
        setUser,
        googleLogin,
        signup,
        login,
        userId,
        userName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};


// import React, { createContext, useState, useEffect, useCallback } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [isLoggedIn, setIsLoggedIn] = useState(!!token);
//   const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
//   const [userName, setUserName] = useState(localStorage.getItem("userName") || "");

//   // Logout function wrapped in useCallback to avoid re-creation
//   const logout = useCallback(() => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     localStorage.removeItem("userName");

//     setUser(null);
//     setToken("");
//     setIsLoggedIn(false);
//     setUserId("");
//     setUserName("");

//     navigate("/login");
//   }, [navigate]);

//   // Check token validity and update state
//   useEffect(() => {
//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         setUser(decodedUser);
//         setIsLoggedIn(true);
//         setUserId(decodedUser.userId);
//         setUserName(decodedUser.userName);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         logout(); // Now stable due to useCallback
//       }
//     } else {
//       setIsLoggedIn(false);
//       setUser(null);
//     }
//   }, [token, logout]); // No warning now ✅

//   // Signup function
//   const signup = async (userData) => {
//     try {
//       const res = await axios.post("http://localhost:5000/signup", userData);
//       alert(res.data.message);
//       navigate("/login");
//     } catch (error) {
//       console.error("Signup error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   };

//   // Login function
//   const login = async (credentials) => {
//     try {
//       const res = await axios.post("http://localhost:5000/login", credentials);
//       const decodedUser = jwtDecode(res.data.token);

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("userId", decodedUser.userId);
//       localStorage.setItem("userName", decodedUser.userName);

//       setToken(res.data.token);
//       setUser(decodedUser);
//       setIsLoggedIn(true);
//       setUserId(decodedUser.userId);
//       setUserName(decodedUser.userName);

//       navigate("/");
//       window.location.reload();
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };
//   // Google Login function
//   const googleLogin = () => {
//     window.location.href = "http://localhost:5000/auth/google";
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         isLoggedIn,
//         setIsLoggedIn,
//         logout,
//         setUser,
//         googleLogin,
//         signup,
//         login,
//         userId,
//         userName,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };


