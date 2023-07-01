import React from "react";
import { usePost } from "../../context/PostContext";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "./NewPost.css";
import { useAuth } from "../../context/AuthContext";

const NewPost = ({ setShowCreatePost }) => {
  const { user } = useAuth();
  const { createNewPostFunc } = usePost();
  const [content, setContent] = useState("");

  const textAreaRef = useRef();

  const newPosthandler = (event) => {
    event.preventDefault();
    createNewPostFunc({ content });
    toast.success("Created new post");
    setShowCreatePost(false);
    setContent("");
    textAreaRef.current.innerText = "";
  };

  return (
    <div className="new_post">
      {/* <div className="user_profile_pic"> */}
      <img src={user.profilePic} alt="img" className="post_img" />
      {/* </div> */}
      <form onSubmit={newPosthandler} className="input_form" >
        <div className="input_area">
          <textarea
            ref={textAreaRef}
            value={content}
            // rows={2}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Share your ideas with the world..."
            className="post_area"
          ></textarea>
        </div>
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPost;
