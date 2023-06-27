import React from "react";
import "./Profile.css";
import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { user } = useAuth();
  console.log(user.bannerImg);

  return (
    <div>
      <img className="banner_img" src={user.bannerImg} alt="banner pic" />
      <div className="profile_header">
        <img src={user.profilePic} alt="user_pic" className="profile_img" />
        <div>
          <button>Edit</button>
        </div>
      </div>
      <div className="header_info">
        <h2 style={{ marginBottom: "0" }}>
          {user.firstName} {user.lastName}
        </h2>
        <span style={{ color: "#71717a" }}>@{user.username}</span>
        <p>{user.bio}</p>
      </div>
    </div>
  );
};

export default Profile;
