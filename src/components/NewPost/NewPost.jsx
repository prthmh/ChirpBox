import React from "react";
import { usePost } from "../../context/PostContext";
import { useState, useRef } from "react";
import { toast } from "react-toastify";
import "./NewPost.css";
import { useAuth } from "../../context/AuthContext";
import { defaultAvatar } from "../../utils/profileAvatars";
import EmojiPicker from "emoji-picker-react";
import { uploadMedia } from "../../utils/uploadMedia";

const NewPost = ({ setShowCreatePost }) => {
  const { user } = useAuth();
  const { createNewPostFunc } = usePost();
  const [content, setContent] = useState("");
  const [showEmojiModal, setShowEmojiModal] = useState(false);
  const [media, setMedia] = useState(null);

  const textAreaRef = useRef();

  const handleEmojiInInput = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = content + emoji;
    setContent(updatedContent);
    // setShowEmojiModal(false);
  };

  const newPosthandler = async (event) => {
    event.preventDefault();
    if (media) {
      const res = await uploadMedia(media);
      console.log(res);
      createNewPostFunc({
        content,
        media: res.url,
        mediaAlt: res.original_filename,
      });
    } else {
      createNewPostFunc({ content, media: "", mediaAlt: "" });
    }
    toast.success("Created new post");
    if (setShowCreatePost) {
      setShowCreatePost(false);
    }
    setMedia(null);
    setShowEmojiModal(false);
    setContent("");
    textAreaRef.current.innerText = "";
  };

  return (
    <div className="new_post">
      {/* <div className="user_profile_pic"> */}
      <img
        src={user.profilePic ? user.profilePic : defaultAvatar}
        alt="img"
        className="post_img"
      />
      {/* </div> */}
      <form onSubmit={newPosthandler} className="input_form">
        <div className="input_area">
          <textarea
            ref={textAreaRef}
            value={content}
            onChange={(event) => setContent(event.target.value)}
            placeholder="Share your ideas with the world..."
            className="post_area"
          ></textarea>
        </div>
        {media && <img src={URL.createObjectURL(media)} alt="upload_img" />}
        <div className="upload_image">
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setMedia(e.target.files[0])}
            />
            <i className="fa-solid fa-image"></i>
          </label>
        </div>
        <div className="post_call_to_action_btns">
          <div>
            <label
              onClick={() => setShowEmojiModal(!showEmojiModal)}
              className="emoji_btn"
            >
              <i className="fa-solid fa-face-smile"></i>
            </label>
            {showEmojiModal && (
              <div className="emoji_modal">
                <EmojiPicker
                  onEmojiClick={handleEmojiInInput}
                  height={400}
                  width={350}
                />
              </div>
            )}
          </div>
          <button type="submit" className="btn">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
