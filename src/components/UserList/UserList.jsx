import React from "react";
import "./UserList.css";
import { NavLink } from "react-router-dom";

const UserList = ({ usersInList }) => {
  console.log("u list", usersInList);
  return (
    <div>
      {usersInList.map((user) => (
        <div key={user._id} className="user_item">
          <NavLink
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className="info">
              <div>
                <img
                  src={user.profilePic}
                  alt="user_pic"
                  className="profilpic"
                />
              </div>

              <div className="user_detail">
                <p>
                  {user.firstName} {user.lastName}
                </p>
                <p style={{ color: "#71717a" }}>@{user.username}</p>
              </div>
            </div>
          </NavLink>
          <button>Follow</button>
        </div>
      ))}
    </div>
  );
};

export default UserList;
