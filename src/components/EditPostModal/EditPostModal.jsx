import React, { useState } from "react";
import "./EditModal.css";
import { usePost } from "../../context/PostContext";
import { uploadMedia } from "../../utils/uploadMedia";
import EmojiPicker from "emoji-picker-react";
import { toast } from "react-toastify";

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
    const toastId = toast.loading("Saving Post...", { autoClose: false });
    if (editPostMedia) {
      const res = await uploadMedia(editPostMedia);
      console.log("edit img res", res);
      editPostFunc(post._id, toastId, {
        content: input?.content,
        mediaURL: res.url,
        mediaAlt: res.original_filename,
      });
    } else {
      editPostFunc(post._id, toastId, input);
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
        <div className="edit_post_btns">
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
                  height={300}
                  width={300}
                  searchDisabled={true}
                />
              </div>
            )}
          </div>
          <label className="upload_img_edit_post emoji_btn">
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                if (Math.round(e.target.files[0].size / 1024000) > 1) {
                  toast.warn("File size should be below 1MB", {
                    position: "top-right",
                  });
                } else {
                  setEditPostMedia(e.target.files[0]);
                  setInput((prevState) => ({
                    ...prevState,
                    mediaURL: URL.createObjectURL(e.target.files[0]),
                  }));
                }
              }}
            />
            <i className="fa-solid fa-image"></i>
          </label>

          <button type="submit" className="btn">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPostModal;
