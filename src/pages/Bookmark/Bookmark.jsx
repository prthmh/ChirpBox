import React from "react";
import { useData } from "../../context/DataContext";
import PostsSection from "../../components/PostsSection/PostsSection";
import { usePost } from "../../context/PostContext";

const Bookmark = () => {
  const {
    dataState: { bookmarks },
  } = useData();

  const {
    postState: { allPosts },
  } = usePost();

  return (
    <div>
      <h2
        style={{
          margin: 0,
          padding: "0 0 0.5rem 1rem",
          borderBottom: "1px solid var(--text-color-dark2)",
        }}
      >
        Bookmark
      </h2>
      {bookmarks?.length > 0 ? (
        bookmarks?.map((postId) => {
          const bookmarkedPost = allPosts?.find((post) => post._id === postId);
          console.log("bok", bookmarkedPost);
          return <PostsSection key={postId} post={bookmarkedPost} />;
        })
      ) : (
        <h4
          style={{
            padding: "0.8rem",
            color: "var(--text-color-dark)",
            textAlign: "center",
          }}
        >
          No posts in bookmark
        </h4>
      )}
    </div>
  );
};

export default Bookmark;
