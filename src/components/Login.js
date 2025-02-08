import React, { useState, useContext } from "react";
import { AuthContext } from "./../AuthContext";

import forest from "../resource/forest.png";
import google from "../resource/google.png";

const Login = () => {
  const { login, googleLogin } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    login(credentials);
  };

  return (
    <div className="w-screen flex items-center justify-center min-h-screen bg-green-100">
       <div className="bg-white rounded-lg shadow-lg flex w-[700px] overflow-hidden">
       <div className="w-1/2 m-4">
          <img src={forest} alt="Eco-Friendly Login" className="w-full h-full object-cover" />
        </div>
        <div className="w-1/2 p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Login</h2>
        
      <form onSubmit={handleSubmit}>
        <label className="text-gray-600 text-sm">Email</label>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required  className="w-full px-3 py-2 border rounded-md mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <label className="text-gray-600 text-sm">Password</label>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required  className="w-full px-3 py-2 border rounded-md mt-1 mb-3 focus:outline-none focus:ring-2 focus:ring-green-400"/>
        <button type="submit"
        className={`w-full text-white py-2 rounded-md ${
          loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-700 hover:bg-green-800"
        } transition`}
        disabled={loading}>Login</button>
      </form>
      <button onClick={googleLogin} className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded-md mt-3 hover:bg-blue-700 transition"><img src={google} alt="Google" className="w-5 h-5 mr-2" />
      Login with Google</button>
    </div>
    </div>
    </div>
  );
};

export default Login;
