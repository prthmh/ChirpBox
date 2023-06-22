import React from "react";
import PageNavigations from "../../components/PageNavigations/PageNavigations";
import "./Explore.css";
import PostsSection from "../../components/PostsSection/PostsSection";
import SuggestedUserList from "../../components/SuggestedUserList/SuggestedUserList";
import { usePost } from "../../context/PostContext";

const Explore = () => {
  const {
    postState: { allPosts },
  } = usePost();
  // console.log("explore posts", allPosts);
  return (
    <div className="explore_page">
      <div className="explore_page_nav" style={{ flexBasis: "15%" }}>
        <PageNavigations />
      </div>
      <div className="explore_posts">
        {allPosts?.map((post) => (
          <PostsSection post={post} key={post._id} />
        ))}
      </div>
      <div className="suggested_users">
        <SuggestedUserList />
      </div>
    </div>
  );
};

export default Explore;
