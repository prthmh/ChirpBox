import React from "react";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import UserList from "../UserList/UserList";
import "./SuggesUser.css";

const SuggestedUserList = () => {
  const {
    dataState: { allUsers },
  } = useData();
  const { user } = useAuth();
  const suggestedUsers = allUsers?.filter(
    ({ username }) => username !== user.username
  );
  // console.log("sugges", suggestedUsers);
  return (
    <div className="sugges_compo">
      <h3>Suggested Users</h3>

      <UserList usersInList={suggestedUsers} />
    </div>
  );
};

export default SuggestedUserList;
