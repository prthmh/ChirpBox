import React from "react";
import { useAuth } from "../../context/AuthContext";

const Feed = () => {
  const { user } = useAuth();
  console.log(user);
  return <div>Feed</div>;
};

export default Feed;
