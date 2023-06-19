import React from "react";
import { useData } from "../../context/DataContext";

const Explore = () => {
  const {
    dataState: { allPosts, allUsers },
  } = useData();
  console.log("explore posts", allPosts);
  return <div>Explore</div>;
};

export default Explore;
