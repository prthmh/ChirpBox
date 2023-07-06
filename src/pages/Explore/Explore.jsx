import React from "react";

import PostsSection from "../../components/PostsSection/PostsSection";
import { usePost } from "../../context/PostContext";
import { filterPosts } from "../../utils/filterPosts";
import FilterTab from "../../components/FilterTab/FilterTab";

const Explore = () => {
  const {
    postState: { allPosts, filter },
  } = usePost();
  // console.log("explore posts", allPosts);
  const filteredPosts = filterPosts(allPosts, filter);
  return (
    <div>
      <h2
        style={{
          margin: 0,
          padding: "0 0 0.5rem 1rem",
        }}
      >
        Explore
      </h2>
      <FilterTab />
      {filteredPosts?.map((post) => (
        <PostsSection post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Explore;
