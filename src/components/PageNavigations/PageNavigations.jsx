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
          <span className="nav_name" >Home</span>
        </NavLink>
        <NavLink to="/explore" className="nav_element" style={isNavActive}>
          <i className="fa-solid fa-compass"></i>
          <span className="nav_name" >Explore</span>
        </NavLink>
        <NavLink to="/bookmarks" className="nav_element" style={isNavActive}>
          <i className="fa-solid fa-bookmark"></i>
          <span className="nav_name" >Bookmarks</span>
        </NavLink>

        <p
          onClick={logOutFunc}
          style={{ cursor: "pointer" }}
          className="nav_element"
        >
          <i className="fa-solid fa-right-from-bracket"></i>
          <span className="nav_name" >Logout</span>
        </p>
      </div>
      <div className="user_in_nav">
        {user.firstName}
        <br />@{user.username}
      </div>
    </div>
  );
};

export default PageNavigations;
