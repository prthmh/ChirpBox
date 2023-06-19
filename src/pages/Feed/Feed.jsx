import React from "react";
import { useAuth } from "../../context/AuthContext";
import { useData } from "../../context/DataContext";

const Feed = () => {
  const { user } = useAuth();
  const {
    dataState: { allUsers, allPosts, userFeedPosts },
  } = useData();
  console.log("feed", user);
  console.log("feed folo", user.following);
  console.log("feed users from reducer", allUsers);
  console.log("feed posts from reducer", allPosts);
  console.log("feed user posts", userFeedPosts)

  return <div>Feed</div>;
};

export default Feed;
