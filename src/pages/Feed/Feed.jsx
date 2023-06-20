import React from "react";
import { useData } from "../../context/DataContext";
import PageNavigations from "../../components/PageNavigations/PageNavigations";
import "./Feed.css";
import PostsSection from "../../components/PostsSection/PostsSection";
import SuggestedUserList from "../../components/SuggestedUserList/SuggestedUserList";

const Feed = () => {
  const {
    dataState: { userFeedPosts },
  } = useData();

  return (
    <div className="feed_page">
      <div className="feed_page_nav" style={{ flexBasis: "15%" }}>
        <PageNavigations />
      </div>
      <div className="feed_posts">
        {userFeedPosts?.map((post) => (
          <PostsSection post={post} />
        ))}
      </div>
      <div className="suggested_users">
        <SuggestedUserList />
      </div>
    </div>
  );
};

export default Feed;
