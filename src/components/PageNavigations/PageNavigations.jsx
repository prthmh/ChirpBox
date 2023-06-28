import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNavigations.css";
import { useAuth } from "../../context/AuthContext";

const PageNavigations = () => {
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
        <NavLink to={`/profile/${user._id}`} className="nav_element" style={isNavActive}>
          <i className="fa-solid fa-user"></i>
          <span className="nav_name">Profile</span>
        </NavLink>

        <p
          onClick={logOutFunc}
          style={{ cursor: "pointer" }}
          className="nav_element"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <span className="nav_name">Logout</span>
        </p>
      </div>
      <div className="user_in_nav">
        <div>
          <img
            src={user.profilePic}
            alt="user_pic"
            className="user_pic_in_nav"
          />
        </div>
        <div>
          <span style={{ color: "var(--text-color-dark)", fontWeight: "bolder" }}>
            {user.firstName} {user.lastName}
          </span>
          <br />
          <span style={{ color: "#71717a" }}>@{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default PageNavigations;
