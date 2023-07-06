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
      <FilterTab />
      {filteredPosts?.map((post) => (
        <PostsSection post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Explore;
