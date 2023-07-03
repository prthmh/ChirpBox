import React from "react";
import PageNavigations from "../../components/PageNavigations/PageNavigations";
import "./Explore.css";
import PostsSection from "../../components/PostsSection/PostsSection";
import SuggestedUserList from "../../components/SuggestedUserList/SuggestedUserList";
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
    <div className="explore_page">
      <div className="explore_page_nav" style={{ flexBasis: "10%" }}>
        <PageNavigations />
      </div>
      <div className="explore_posts">
        <FilterTab />
        {filteredPosts?.map((post) => (
          <PostsSection post={post} key={post._id} />
        ))}
      </div>
      <div className="suggested_users" style={{ flexBasis: "20%" }}>
        <SuggestedUserList />
      </div>
    </div>
  );
};

export default Explore;
