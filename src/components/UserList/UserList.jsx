import React from "react";
import "./UserList.css";
import { NavLink } from "react-router-dom";
import { useData } from "../../context/DataContext";

const UserList = ({ usersInList, setShowNetworkModal }) => {
  const { followUserFunc, unfollowUserFunc, isAlreadyFollowed } = useData();
  return (
    <div>
      {usersInList.map((user) => (
        <div key={user._id} className="user_item">
          <NavLink
            to={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={(prevState) =>
              setShowNetworkModal({
                ...prevState,
                show: false,
                type: "",
              })
            }
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
          {isAlreadyFollowed(user._id) ? (
            <button onClick={() => unfollowUserFunc(user._id)}>Unfollow</button>
          ) : (
            <button onClick={() => followUserFunc(user._id)}>Follow</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default UserList;
