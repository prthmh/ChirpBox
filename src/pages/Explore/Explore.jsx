import React from "react";
import { useData } from "../../context/DataContext";
import PageNavigations from "../../components/PageNavigations/PageNavigations";
import "./Explore.css";
import PostsSection from "../../components/PostsSection/PostsSection";
import SuggestedUserList from "../../components/SuggestedUserList/SuggestedUserList";

const Explore = () => {
  const {
    dataState: { allPosts },
  } = useData();
  console.log("explore posts", allPosts);
  return (
    <div className="explore_page">
      <div className="explore_page_nav" style={{ flexBasis: "15%" }}>
        <PageNavigations />
      </div>
      <div className="explore_posts">
        {allPosts?.map((post) => (
          <PostsSection post={post} />
        ))}
      </div>
      <div className="suggested_users">
        <SuggestedUserList />
      </div>
    </div>
  );
};

export default Explore;
