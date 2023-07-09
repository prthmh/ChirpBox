import React from "react";
import "./TopBar.css";
import chirpBoxLogo from "../../assets/chripbox_logo_2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useData } from "../../context/DataContext";
import UserList from "../UserList/UserList";

const TopBar = () => {
  const {
    dataState: { allUsers },
  } = useData();
  const [input, setInput] = useState("");
  const [searchedUsers, setSearchedUsers] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
    if (value.length > 0) {
      const search = allUsers?.filter(
        ({ username, firstName, lastName }) =>
          username.toLowerCase().includes(value) ||
          firstName.toLowerCase().includes(value) ||
          lastName.toLowerCase().includes(value)
      );
      setSearchedUsers(search);
    }
  };

  return (
    <div className="top_section">
      <div className="top_bar">
        <Link to="/feed" style={{ textDecoration: "none" }}>
          <div className="logo">
            <img src={chirpBoxLogo} alt="logo" className="site_logo" />
            <span className="site_name">ChirpBox</span>
          </div>
        </Link>
        <div className="user_search">
          <span className="search_icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
          <input
            type="text"
            placeholder="Search users..."
            className="search_input"
            onChange={handleSearch}
          />
          {input.length > 0 && (
            <div className="searched_users">
              {searchedUsers.length > 0 ? (
                <UserList usersInList={searchedUsers} />
              ) : (
                <h4>No Users</h4>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
