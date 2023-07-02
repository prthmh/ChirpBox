import React from "react";
import PageNavigations from "../../components/PageNavigations/PageNavigations";
import "./Feed.css";
import PostsSection from "../../components/PostsSection/PostsSection";
import SuggestedUserList from "../../components/SuggestedUserList/SuggestedUserList";
import { usePost } from "../../context/PostContext";
import { useAuth } from "../../context/AuthContext";
import NewPost from "../../components/NewPost/NewPost";
import FilterTab from "../../components/FilterTab/FilterTab";
import { filterPosts } from "../../utils/filterPosts";

const Feed = () => {
  const { user } = useAuth();
  const {
    postState: { allPosts, filter },
  } = usePost();
  const postsOnFeed = allPosts?.filter(
    (post) =>
      post.username === user.username ||
      user.following.some((item) => item.username === post.username)
  );
  console.log(postsOnFeed, filter);
  const filteredPosts = filterPosts(postsOnFeed, filter);
  // console.log(filteredPosts);

  return (
    <div className="feed_page">
      <div className="feed_page_nav" style={{ flexBasis: "10%" }}>
        <PageNavigations />
      </div>
      <div className="feed_posts">
        <NewPost />
        <FilterTab />
        {filteredPosts.length > 0 ? (
          filteredPosts?.map((post) => (
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
