import React, { useContext } from "react";
import { AuthContext } from "../AuthContext";

const Dashboard2 = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome {user?.email}</h2>
      <h2>userId {user?.userId}</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard2;
