import React from "react";
import "./PostsSection.css";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { usePost } from "../../context/PostContext";

const PostsSection = ({ post }) => {
  const { token, user } = useAuth();
  const {
    dataState: { allUsers, bookmarks },
    addToBookMarksFunc,
    removeFromBookmarksFunc,
    isPostAlreadyBookmarked,
  } = useData();

  const { likePostFunc, disLikePostFunc, isPostAlreadyLiked, deletePostFunc } =
    usePost();

  const postOfUser = allUsers?.find(
    ({ username }) => username === post.username
  );
  // console.log("post section", user);
  // console.log("post section t", token);
  // console.log("post section",user.bookmarks)

  return (
    <div className="post_card">
      <img
        src={postOfUser.profilePic}
        className="user_pic"
        alt="user profile"
      />
      <div className="post_content">
        <h4 style={{ margin: "0", display: "inline-block" }}>
          {postOfUser.firstName} {postOfUser.lastName}
        </h4>{" "}
        <span style={{ color: "#71717a" }}>@{postOfUser.username}</span>
        <p>{post.content}</p>
        {post?.postPic && <img src={post?.postPic} alt="post pic" />}
        <div className="call_to_action_btns">
          <div
            onClick={() =>
              isPostAlreadyLiked(post, user)
                ? disLikePostFunc(post._id, token)
                : likePostFunc(post._id, token)
            }
          >
            {isPostAlreadyLiked(post, user) ? (
              <i className="fa-solid fa-heart"></i>
            ) : (
              <i className="fa-regular fa-heart"></i>
            )}
          </div>
          <div
            onClick={() =>
              isPostAlreadyBookmarked(post._id, bookmarks)
                ? removeFromBookmarksFunc(post._id, token)
                : addToBookMarksFunc(post._id, token)
            }
          >
            {isPostAlreadyBookmarked(post._id, bookmarks) ? (
              <i className="fa-solid fa-bookmark"></i>
            ) : (
              <i className="fa-regular fa-bookmark"></i>
            )}
          </div>
          <div>
            <i className="fa-regular fa-comment"></i>
          </div>
          <div>
            <i className="fa-sharp fa-solid fa-share-nodes"></i>
          </div>
          {post.username === user.username && (
            <div onClick={() => deletePostFunc(post._id)}>
              <i className="fa-solid fa-trash"></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostsSection;
