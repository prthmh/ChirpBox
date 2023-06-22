import React from "react";
import { useData } from "../../context/DataContext";
import PostsSection from "../../components/PostsSection/PostsSection";

const Bookmark = () => {
  const {
    dataState: { bookmarks },
  } = useData();
  return (
    <div>
      {bookmarks.length > 0 ? (
        bookmarks.map((post) => <PostsSection key={post._id} post={post} />)
      ) : (
        <h2>No posts in bookmark</h2>
      )}
    </div>
  );
};

export default Bookmark;
