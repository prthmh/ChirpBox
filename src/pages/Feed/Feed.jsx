import React from "react";
import PageNavigations from "../../components/PageNavigations/PageNavigations";
import "./Feed.css";
import PostsSection from "../../components/PostsSection/PostsSection";
import SuggestedUserList from "../../components/SuggestedUserList/SuggestedUserList";
import { usePost } from "../../context/PostContext";
import { useAuth } from "../../context/AuthContext";
import NewPost from "../../components/NewPost/NewPost";

const Feed = () => {
  const { user } = useAuth();
  const {
    postState: { allPosts },
  } = usePost();

  const postsOnFeed = allPosts?.filter(
    ({ username }) =>
      username === user.username || user.following.includes(username)
  );

  return (
    <div className="feed_page">
      <div className="feed_page_nav" style={{ flexBasis: "10%" }}>
        <PageNavigations />
      </div>
      <div className="feed_posts">
        <NewPost />
        {postsOnFeed.length > 0 ? (
          postsOnFeed?.map((post) => (
            <PostsSection post={post} key={post._id} />
          ))
        ) : (
          <h4 style={{ padding: "0.8rem", color: "var(--text-color-dark)" }}>
            To see posts in feed section you need to follow someone or make a
            post.
          </h4>
        )}
      </div>
      <div className="suggested_users" style={{ flexBasis: "20%" }}>
        <SuggestedUserList />
      </div>
    </div>
  );
};

export default Feed;
