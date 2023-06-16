import React from "react";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { logOutFunc } = useAuth();
  const logoutHandler = () => {
    logOutFunc();
  };
  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Profile;
