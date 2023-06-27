import React from "react";
import "./UserList.css";

const UserList = ({ usersInList }) => {
  console.log("u list", usersInList);
  return (
    <div>
      {usersInList.map((user) => (
        <div key={user._id} className="user_item">
          <div className="info">
            <div>
              <img src={user.profilePic} alt="user_pic" className="profilpic" />
            </div>

            <div className="user_detail">
              <p>
                {user.firstName} {user.lastName}
              </p>
              <p style={{color: "#71717a"}} >@{user.username}</p>
            </div>
          </div>
          <button>Follow</button>
          {/* <p>{user.username}</p>
          <p>
              {user.firstName} {user.lastName}
            </p> */}
        </div>
      ))}
    </div>
  );
};

export default UserList;
