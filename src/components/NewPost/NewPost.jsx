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
  const [disablePostBtn, setDisablePostBtn] = useState(false);

  const textAreaRef = useRef();

  const handleEmojiInInput = (emojiObj) => {
    const emoji = emojiObj.emoji;
    const updatedContent = content + emoji;
    setContent(updatedContent);
    // setShowEmojiModal(false);
  };

  const newPosthandler = async (event) => {
    event.preventDefault();
    setDisablePostBtn(true);
    const toastId = toast.loading("Creating Post...", { autoClose: false });
    if (media) {
      const res = await uploadMedia(media);
      createNewPostFunc({
        content,
        media: res.url,
        mediaAlt: res.original_filename,
        setDisablePostBtn,
        toastId,
      });
    } else {
      createNewPostFunc({
        content,
        media: "",
        mediaAlt: "",
        setDisablePostBtn,
        toastId,
      });
    }
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
        className="user_img"
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
        {media && (
          <div className="new_post_media">
            {" "}
            <img
              src={URL.createObjectURL(media)}
              alt="upload_img"
              className="uploaded_pic"
            />
            <div className="cancel_img" onClick={() => setMedia(null)}>
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        )}
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
                  width={300}
                  searchDisabled={true}
                />
              </div>
            )}
          </div>
          <div>
            <label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  Math.round(e.target.files[0].size / 1024000) > 1
                    ? toast.warn("File size should be below 1MB", {
                        position: "top-right",
                      })
                    : setMedia(e.target.files[0])
                } 
                className="upload_image"
              />
              <i className="fa-solid fa-image btn"></i>
            </label>
          </div>
          <button
            type="submit"
            className="btn"
            disabled={(content === "" && media === null) || disablePostBtn}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
