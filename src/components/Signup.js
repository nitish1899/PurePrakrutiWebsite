
import React, { useState, useContext } from "react";
import { AuthContext } from "./../AuthContext";

const Signup = () => {
  const { signup, googleLogin } = useContext(AuthContext);
  const [userData, setUserData] = useState({ userName: "", email: "", password: "" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting signup form:", userData); 
    await signup(userData);
  };
  

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="userName"
          placeholder="Username"
          onChange={handleChange}
          value={userData.userName}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={userData.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={userData.password}
          required
        />
        <button type="submit">Signup</button>
      </form>
      <button onClick={googleLogin}>Signup with Google</button>
    </div>
  );
};

export default Signup;



// import React, { useState, useContext } from "react";
// import { AuthContext } from "./../AuthContext";

// const Signup = () => {
//   const { signup, googleLogin } = useContext(AuthContext);
//   const [userData, setUserData] = useState({ userName: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     signup(userData);
//   };

//   return (
//     <div>
//       <h2>Signup</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="userName" placeholder="Username" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//         <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//         <button type="submit">Signup</button>
//       </form>
//       <button onClick={googleLogin}>Signup with Google</button>
//     </div>
//   );
// };

// export default Signup;
