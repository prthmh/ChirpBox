import React, { useState } from "react";
import "./EditModal.css";
import { usePost } from "../../context/PostContext";

const EditPostModal = ({ setShowEditModal, post }) => {
  const [input, setInput] = useState(post.content);
  const { editPostFunc } = usePost();

  const editPostHandler = (event) => {
    event.preventDefault();
    editPostFunc(post._id, input);
    setShowEditModal(false);
  };

  return (
    <div className="edit_post">
      <div className="edit_header">
        <h3 style={{ margin: "0" }}>Edit post</h3>
        <div
          className="cancel_btn"
          onClick={() => setShowEditModal(false)}
          style={{ cursor: "pointer" }}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
      </div>
      <form onSubmit={editPostHandler}>
        <textarea
          className="edit_post_input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></textarea>
        <button type="submit" className="btn">Save</button>
      </form>
    </div>
  );
};

export default EditPostModal;
