import React, { useState } from "react";
import "./EditModal.css";
import { usePost } from "../../context/PostContext";
import { uploadMedia } from "../../utils/uploadMedia";
import EmojiPicker from "emoji-picker-react";

const EditPostModal = ({ setShowEditModal, post }) => {
  const [input, setInput] = useState(post);
  const { editPostFunc } = usePost();
  const [editPostMedia, setEditPostMedia] = useState(null);
  const [showEmojiModal, setShowEmojiModal] = useState(false);

  const handleEmojiInInput = (emojiObj) => {
    const emoji = emojiObj.emoji;
    setInput({ ...input, content: input?.content + emoji });
    // const updatedContent = content + emoji;
    // setContent(updatedContent);
    // setShowEmojiModal(false);
  };

  const editPostHandler = async (event) => {
    event.preventDefault();
    if (editPostMedia) {
      const res = await uploadMedia(editPostMedia);
      console.log("edit img res", res);
      editPostFunc(post._id, {
        content: input?.content,
        mediaURL: res.url,
        mediaAlt: res.original_filename,
      });
    } else {
      editPostFunc(post._id, input);
    }
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
          value={input?.content}
          onChange={(event) =>
            setInput({ ...input, content: event.target.value })
          }
        ></textarea>
        {input?.mediaURL?.length > 0 && (
          <div className="edit_post_media">
            <img
              className="edit_post_img"
              src={
                editPostMedia
                  ? URL.createObjectURL(editPostMedia)
                  : input?.mediaURL
              }
              alt="img"
            />
            <div
              className="cancel_edit_img"
              onClick={() =>
                setInput((prevState) => ({ ...prevState, mediaURL: "" }))
              }
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
        )}
        <label className="upload_img_edit_post">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              setEditPostMedia(e.target.files[0]);
            }}
          />
          <i className="fa-solid fa-image"></i>
        </label>
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
        <button type="submit" className="btn">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditPostModal;
