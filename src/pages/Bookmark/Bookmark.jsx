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

  console.log("bookmarks", bookmarks);
  return (
    <div>
      {bookmarks?.length > 0 ? (
        bookmarks?.map((postId) => {
          const bookmarkedPost = allPosts?.find((post) => post._id === postId);
          console.log("bok",bookmarkedPost)
          return <PostsSection key={postId} post={bookmarkedPost} />
        })
      ) : (
        <h2>No posts in bookmark</h2>
      )}
    </div>
  );
};

export default Bookmark;
