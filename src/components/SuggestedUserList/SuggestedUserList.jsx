import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import UserList from "../UserList/UserList";
import "./SuggesUser.css";

const SuggestedUserList = () => {
  const {
    dataState: { allUsers },
  } = useData();
  const { user } = useAuth();

  const [suggestedUsers, setSuggestedUsers] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  useEffect(() => {
    const allSuggestedUsers = allUsers
      ?.filter(({ username }) => username !== user.username)
      ?.filter(
        (item) =>
          !user?.following?.find(({ username }) => username === item.username)
      );
    setOriginalData(allSuggestedUsers);
    setSuggestedUsers(allSuggestedUsers);
  }, [allUsers, user]);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    if (value.length > 0) {
      const updatedUserList = originalData?.filter(
        ({ username, firstName, lastName }) =>
          username.toLowerCase().includes(value) ||
          firstName.toLowerCase().includes(value) ||
          lastName.toLowerCase().includes(value)
      );
      setSuggestedUsers(updatedUserList);
    } else {
      setSuggestedUsers(originalData);
    }
  };

  return (
    <div className="sugges_compo">
      <input
        type="text"
        placeholder="Search People..."
        onChange={(e) => handleChange(e)}
      />
      <h3>Suggested Users</h3>

      <UserList usersInList={suggestedUsers} />
    </div>
  );
};

export default SuggestedUserList;
