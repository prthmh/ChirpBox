import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNavigations.css";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import NewPostModal from "../NewPostModal/NewPostModal";
import { defaultAvatar } from "../../utils/profileAvatars";

const PageNavigations = () => {
  const [showCreatePost, setShowCreatePost] = useState(false);
  const { user, logOutFunc } = useAuth();
  const isNavActive = ({ isActive }) => ({
    backgroundColor: isActive && "#314077",
    color: isActive && "#b0caed",
  });
  return (
    <div className="nav_section">
      <div className="page_routes">
        <NavLink to="/feed" className="nav_element" style={isNavActive}>
          <i className="fa-solid fa-house"></i>
          <span className="nav_name">Home</span>
        </NavLink>
        <NavLink to="/explore" className="nav_element" style={isNavActive}>
          <i className="fa-solid fa-compass"></i>
          <span className="nav_name">Explore</span>
        </NavLink>
        <NavLink to="/bookmarks" className="nav_element" style={isNavActive}>
          <i className="fa-solid fa-bookmark"></i>
          <span className="nav_name">Bookmarks</span>
        </NavLink>
        <NavLink
          to={`/profile/${user._id}`}
          className="nav_element"
          style={isNavActive}
        >
          <i className="fa-solid fa-user"></i>
          <span className="nav_name">Profile</span>
        </NavLink>
        <button
          className="create_post"
          onClick={() => setShowCreatePost(!showCreatePost)}
        >
          <i className="fa-solid fa-plus"></i>
          <span className="nav_name">Create New Post</span>
        </button>

        <p
          onClick={logOutFunc}
          style={{ cursor: "pointer" }}
          className="nav_element"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <span className="nav_name">Logout</span>
        </p>
      <div className="user_in_nav">
        <div>
          <img
            src={user.profilePic ? user.profilePic : defaultAvatar}
            alt="user_pic"
            className="user_pic_in_nav"
          />
        </div>
        <div>
          <span className="nav_name"
            style={{ color: "var(--text-color-dark)", fontWeight: "bolder" }}
          >
            {user.firstName} {user.lastName}
          </span>
          <br />
          <span className="nav_name" style={{ color: "#71717a" }}>@{user.username}</span>
        </div>
      </div>
      </div>
      {showCreatePost && (
        <div className="new_post_modal">
          <NewPostModal setShowCreatePost={setShowCreatePost} />
        </div>
      )}
    </div>
  );
};

export default PageNavigations;
