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
      <form onSubmit={editPostHandler}>
        <textarea
          className="edit_input"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        ></textarea>
        <button type="submit">Save</button>
      </form>
      <button onClick={() => setShowEditModal(false)}>Cancel</button>
    </div>
  );
};

export default EditPostModal;
