import React from "react";
import { usePost } from "../../context/PostContext";
import { useState, useRef } from "react";
import { toast } from "react-toastify";

const NewPost = () => {
  const { createNewPostFunc } = usePost();
  const [content, setContent] = useState("");

  const textAreaRef = useRef();

  const newPosthandler = (event) => {
    event.preventDefault();
    createNewPostFunc({ content });
    toast.success("Created new post");
    setContent("");
    textAreaRef.current.innerText = "";
  };

  return (
    <div className="new_post">
      <div className="user_profile_pic">
        <img alt="img" />
      </div>
      <form onSubmit={newPosthandler}>
        <div className="input_area">
          <textarea
            ref={textAreaRef}
            value={content}
            rows={2}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Share your ideas with the world..."
          ></textarea>
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPost;
