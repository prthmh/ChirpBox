import React, { useState } from "react";
import "./PostsSection.css";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { usePost } from "../../context/PostContext";
import EditPostModal from "../EditPostModal/EditPostModal";
import { defaultAvatar } from "../../utils/profileAvatars";
import { getDate } from "../../utils/getDate";

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

  const [showEditModal, setShowEditModal] = useState(false);

  const postOfUser = allUsers?.find(
    ({ username }) => username === post.username
  );
  return (
    <div className="post_card">
      <img
        src={postOfUser.profilePic ? postOfUser.profilePic : defaultAvatar}
        className="user_pic"
        alt="user profile"
      />
      <div className="post_content">
        <div className="post_header">
          <div className="header_content">
            <h4 style={{ margin: "0", display: "inline-block" }}>
              {postOfUser.firstName} {postOfUser.lastName}
            </h4>{" "}
            <span style={{ color: "#71717a" }}>
              @{postOfUser.username} · {getDate(post?.createdAt)}
            </span>
          </div>
          <div className="edit_btn call_to_action_btns">
            {post.username === user.username && (
              <i
                title="Edit"
                className="fa-solid fa-pen-to-square"
                onClick={() => setShowEditModal(!showEditModal)}
              ></i>
            )}
          </div>
        </div>
        <p>{post.content}</p>
        {post?.mediaURL && <img src={post?.mediaURL} alt={post?.mediaAlt} />}
        <div className="call_to_action_btns">
          <div
            onClick={() =>
              isPostAlreadyLiked(post, user)
                ? disLikePostFunc(post._id, token)
                : likePostFunc(post._id, token)
            }
          >
            {isPostAlreadyLiked(post, user) ? (
              <>
                <i className="fa-solid fa-heart" title="Dislike"></i>
                <span style={{ marginLeft: "0.2rem" }}></span>
                {post.likes.likeCount}
              </>
            ) : (
              <>
                <i className="fa-regular fa-heart" title="Like"></i>
                <span style={{ marginLeft: "0.2rem" }}></span>
                {post.likes.likeCount}
              </>
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
              <i
                className="fa-solid fa-bookmark"
                title="Remove from bookmarks"
              ></i>
            ) : (
              <i className="fa-regular fa-bookmark" title="Bookmark"></i>
            )}
          </div>
          {/* <div>
            <i className="fa-regular fa-comment"></i>
          </div>
          <div>
            <i className="fa-sharp fa-solid fa-share-nodes"></i>
          </div> */}
          {post.username === user.username && (
            <div onClick={() => deletePostFunc(post._id)}>
              <i className="fa-solid fa-trash" title="Delete"></i>
            </div>
          )}
        </div>
      </div>
      {showEditModal && (
        <div className="edit_modal">
          <EditPostModal setShowEditModal={setShowEditModal} post={post} />
        </div>
      )}
    </div>
  );
};

export default PostsSection;
