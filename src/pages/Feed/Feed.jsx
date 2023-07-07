import React from "react";

import PostsSection from "../../components/PostsSection/PostsSection";
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
  const filteredPosts = filterPosts(postsOnFeed, filter);
  // console.log(filteredPosts);

  return (
    <div>
      <h2
        style={{
          margin: 0,
          padding: "0 0 0.5rem 1rem",
          borderBottom: "1px solid var(--text-color-dark2)",
        }}
      >
        Home
      </h2>
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
  );
};

export default Feed;
