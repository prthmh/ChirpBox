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

  const allSuggestedUsers = allUsers
    ?.filter(({ username }) => username !== user.username)
    ?.filter(
      (item) =>
        !user?.following?.find(({ username }) => username === item.username)
    );

  return (
    <div className="sugges_compo">
      <h3>Suggested Users</h3>
      {allSuggestedUsers.length > 0 ? (
        <UserList usersInList={allSuggestedUsers} />
      ) : (
        <h4>No Users</h4>
      )}
    </div>
  );
};

export default SuggestedUserList;
