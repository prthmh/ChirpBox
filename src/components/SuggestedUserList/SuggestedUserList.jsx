import React from "react";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";

const SuggestedUserList = () => {
  const {
    dataState: { allUsers },
  } = useData();
  const { user } = useAuth();
  const suggestedUsers = allUsers?.filter(
    ({ username }) => username !== user.username
  );
  console.log("sugges", suggestedUsers);
  return <div>SuggestedUserList</div>;
};

export default SuggestedUserList;
