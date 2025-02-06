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

  // Logout function wrapped in useCallback to avoid re-creation
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
        setUser(decodedUser);
        setIsLoggedIn(true);
        setUserId(decodedUser.userId);
        setUserName(decodedUser.userName);
      } catch (error) {
        console.error("Invalid token:", error);
        logout(); // Now stable due to useCallback
      }
    } else {
      setIsLoggedIn(false);
      setUser(null);
    }
  }, [token, logout]); // No warning now ✅

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
      const decodedUser = jwtDecode(res.data.token);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", decodedUser.userId);
      localStorage.setItem("userName", decodedUser.userName);

      setToken(res.data.token);
      setUser(decodedUser);
      setIsLoggedIn(true);
      setUserId(decodedUser.userId);
      setUserName(decodedUser.userName);

      navigate("/");
      window.location.reload();
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



// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
//   const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
//   const navigate = useNavigate(); 

//   // Decode token and set user
//   useEffect(() => {
//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         setUser(decodedUser);
//         setUserId(decodedUser.userId);
//         setUserName(decodedUser.userName);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         setUser(null);
//         setUserId("");
//         setUserName("");
//         localStorage.removeItem("token");
//         localStorage.removeItem("userId");
//         localStorage.removeItem("userName");
//       }
//     }
//   }, [token]);

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

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     localStorage.removeItem("userName");
//     setUser(null);
//     setUserId("");
//     setUserName("");
//     setToken("");
//     navigate("/");
//     window.location.reload();
//   };

//   return (
//     <AuthContext.Provider value={{ signup, login, googleLogin, logout, user, userId, userName, setUser, setUserName }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [userId, setUserId] = useState(localStorage.getItem("userId") || "");
//   const navigate = useNavigate(); 

//   // Decode token and set user
//   useEffect(() => {
//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         setUser(decodedUser);
//         setUserId(decodedUser.userId); // Save userId from the decoded token
//       } catch (error) {
//         console.error("Invalid token:", error);
//         setUser(null);
//         setUserId("");
//         localStorage.removeItem("token");
//         localStorage.removeItem("userId");
//       }
//     }
//   }, [token]);

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
//       localStorage.setItem("userId", decodedUser.userId); // Store userId in local storage
//       setToken(res.data.token);
//       setUser(decodedUser);
//       setUserId(decodedUser.userId);
//       navigate("/dashboard"); 
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   // Google Login function
//   const googleLogin = () => {
//     window.location.href = "http://localhost:5000/auth/google"; // Redirect to Google login
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("userId");
//     setUser(null);
//     setUserId("");
//     setToken("");
//     navigate("/login"); // Redirect user to login page after logout
//   };

//   return (
//     <AuthContext.Provider value={{ signup, login, googleLogin, logout, user, userId, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const navigate = useNavigate(); 

//   // Decode token and set user
//   useEffect(() => {
//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         setUser(decodedUser);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         setUser(null);
//         localStorage.removeItem("token");
//       }
//     }
//   }, [token]);

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
//       localStorage.setItem("token", res.data.token);
//       setToken(res.data.token);
//       setUser(jwtDecode(res.data.token));
//       navigate("/dashboard"); 
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   // Google Login function
//   const googleLogin = () => {
//     window.location.href = "http://localhost:5000/auth/google"; // Redirect to Google login
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setToken("");
//     navigate("/login"); // Redirect user to login page after logout
//   };

//   return (
//     <AuthContext.Provider value={{ signup, login, googleLogin, logout, user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const navigate = useNavigate(); // Hook for navigation

//   // Decode token and set user
//   useEffect(() => {
//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         setUser(decodedUser);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         setUser(null);
//         localStorage.removeItem("token");
//       }
//     }
//   }, [token]);

//   // Signup function
//   const signup = async (userData) => {
//     try {
//       const res = await axios.post("http://localhost:5000/signup", userData);
//       console.log("Signup response:", res.data); // ✅ Debugging
//       alert(res.data.message);
//       navigate("/login"); // Redirect to login page after successful signup
//     } catch (error) {
//       console.error("Signup error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   };

//   // Login function
//   const login = async (credentials) => {
//     try {
//       const res = await axios.post("http://localhost:5000/login", credentials);
//       console.log("Login response:", res.data); // ✅ Debugging
//       localStorage.setItem("token", res.data.token);
//       setToken(res.data.token);
//       setUser(jwtDecode(res.data.token));
//       navigate("/dashboard"); // Redirect to dashboard after successful login
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   // Google Login function
//   const googleLogin = () => {
//     window.location.href = "http://localhost:5000/auth/google"; // Redirect to Google login
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setToken("");
//     navigate("/login"); // Redirect user to login page after logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, signup, login, googleLogin, logout, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";
// import { useNavigate } from "react-router-dom";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const navigate = useNavigate(); // Hook for navigation


//   useEffect(() => {
//     const urlParams = new URLSearchParams(window.location.search);
//     const token = urlParams.get("token");
//     if (token) {
//       localStorage.setItem("token", token);
//       setToken(token);
//       setUser(jwtDecode(token));
//       navigate("/dashboard");
//     }
//   }, [token]);
  

//   // Signup function
//   const signup = async (userData) => {
//     try {
//       const res = await axios.post("http://localhost:5000/signup", userData);
//       console.log("Signup response:", res.data); // ✅ Debugging
//       alert(res.data.message);
//       navigate("/login"); // Redirect to login page after successful signup
//     } catch (error) {
//       console.error("Signup error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   };

//   // Login function
//   const login = async (credentials) => {
//     try {
//       const res = await axios.post("http://localhost:5000/login", credentials);
//       console.log("Login response:", res.data); // ✅ Debugging
//       localStorage.setItem("token", res.data.token);
//       setToken(res.data.token);
//       setUser(jwtDecode(res.data.token));
//       navigate("/dashboard"); // Redirect to dashboard after successful login
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   // Google Login function
//   const googleLogin = async () => {
//     window.location.href = "http://localhost:5000/auth/google"; // Changed to use window.location.href to handle redirection
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setToken("");
//     window.location.href = "/"; // Optionally, redirect the user to the home page after logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, signup, login, googleLogin, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import {jwtDecode} from "jwt-decode"; 

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   // Decode token and set user
//   useEffect(() => {
//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         setUser(decodedUser);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         setUser(null);
//         localStorage.removeItem("token");
//       }
//     }
//   }, [token]);

//   // Signup function
//   const signup = async (userData) => {
//     try {
//       const res = await axios.post("http://localhost:5000/signup", userData);
//       console.log("Signup response:", res.data); // ✅ Debugging
//       alert(res.data.message);
//     } catch (error) {
//       console.error("Signup error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   };

//   // Login function
//   const login = async (credentials) => {
//     try {
//       const res = await axios.post("http://localhost:5000/login", credentials);
//       console.log("Login response:", res.data); // ✅ Debugging
//       localStorage.setItem("token", res.data.token);
//       setToken(res.data.token);
//       setUser(jwtDecode(res.data.token));
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   // Google Login function
//   const googleLogin = async () => {
//     window.location.href = "http://localhost:5000/auth/google"; // Changed to use window.location.href to handle redirection
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setToken("");
//     window.location.href = "/"; // Optionally, redirect the user to the home page after logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, signup, login, googleLogin, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };


// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import { jwtDecode } from "jwt-decode";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   // Decode token and set user
//   useEffect(() => {
//     if (token) {
//       try {
//         const decodedUser = jwtDecode(token);
//         setUser(decodedUser);
//       } catch (error) {
//         console.error("Invalid token:", error);
//         setUser(null);
//         localStorage.removeItem("token");
//       }
//     }
//   }, [token]);

//   // Signup function
//   const signup = async (userData) => {
//     try {
//       const res = await axios.post("http://localhost:5000/signup", userData);
//       console.log("Signup response:", res.data); // ✅ Debugging
//       alert(res.data.message);
//     } catch (error) {
//       console.error("Signup error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Signup failed");
//     }
//   };

//   // Login function
//   const login = async (credentials) => {
//     try {
//       const res = await axios.post("http://localhost:5000/login", credentials);
//       console.log("Login response:", res.data); // ✅ Debugging
//       localStorage.setItem("token", res.data.token);
//       setToken(res.data.token);
//       setUser(jwtDecode(res.data.token));
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   // Google Login function
//   const googleLogin = async () => {
//     window.open("http://localhost:5000/auth/google", "_self");
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setToken("");
//   };

//   return (
//     <AuthContext.Provider value={{ user, signup, login, googleLogin, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



// import React, { createContext, useState, useEffect } from "react";
// import axios from "axios";
// import {jwtDecode} from "jwt-decode";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   // Decode token and set user
//   useEffect(() => {
//     if (token) {
//       const decodedUser = jwtDecode(token);
//       setUser(decodedUser);
//     }
//   }, [token]);

//   // Signup function
//   const signup = async (userData) => {
//     try {
//       const res = await axios.post("http://localhost:5000/signup", userData);
//       alert(res.data.message);
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };

//   // Login function
//   const login = async (credentials) => {
//     try {
//       const res = await axios.post("http://localhost:5000/login", credentials);
//       localStorage.setItem("token", res.data.token);
//       setToken(res.data.token);
//       setUser(jwtDecode(res.data.token));
//     } catch (error) {
//       alert(error.response.data.message);
//     }
//   };

//   // Google Login function
//   const googleLogin = async () => {
//     window.open("http://localhost:5000/auth/google", "_self");
//   };

//   // Logout function
//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     setToken("");
//   };

//   return (
//     <AuthContext.Provider value={{ user, signup, login, googleLogin, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
