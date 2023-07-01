import React from "react";
import "./NewPostModal.css";
import NewPost from "../NewPost/NewPost";

const NewPostModal = ({ setShowCreatePost }) => {
  return (
    <div className="new_post_box">
      <div className="new_post_header">
        <h2 style={{ margin: "0" }}>Edit Profile</h2>
        <div
          className="close_btn"
          onClick={() => setShowCreatePost(false)}
          style={{ cursor: "pointer" }}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
      </div>
      <NewPost setShowCreatePost={setShowCreatePost} />
    </div>
  );
};

export default NewPostModal;
