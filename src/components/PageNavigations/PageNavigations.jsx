import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { MdExplore } from "react-icons/md";
import { MdBookmark } from "react-icons/md";
import "./PageNavigations.css";
import { useAuth } from "../../context/AuthContext";

const PageNavigations = () => {
  const { user, logOutFunc } = useAuth();
  return (
    <div className="nav_section">
      <div className="page_routes">
        <NavLink to="/feed" className="nav_element">
          <AiFillHome />
          <span>Home</span>
        </NavLink>
        <NavLink to="/explore" className="nav_element">
          <MdExplore />
          <span>Explore</span>
        </NavLink>
        <NavLink to="/bookmarks" className="nav_element">
          <MdBookmark />
          <span>Bookmarks</span>
        </NavLink>
        <NavLink to="/likes" className="nav_element">
          <AiFillHeart />
          <span>Likes</span>
        </NavLink>
        <p
          onClick={logOutFunc}
          style={{ cursor: "pointer" }}
          className="nav_element"
        >
          <i class="fa-solid fa-right-from-bracket"></i>
          Logout
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
