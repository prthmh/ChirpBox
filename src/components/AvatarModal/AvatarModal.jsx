import React, { useState } from "react";
import "./AvatarModal.css";
import { avatarAry } from "../../utils/profileAvatars";

const AvatarModal = ({ setShowAvatarModal }) => {
  const [selectedAvatar, setSelectedAvatar] = useState("");
  return (
    <div className="avatar">
      <div className="avatar_header">
        <h2 style={{ margin: "0" }}>Edit Profile</h2>
        <div
          className="close_btn"
          onClick={() => setShowAvatarModal(false)}
          style={{ cursor: "pointer" }}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
      </div>
      <div className="avatar_ary">
        {avatarAry?.map((pic) => (
          <img
            src={pic}
            alt="avatar"
            className="avatar_pic"
            onClick={() => setSelectedAvatar(pic)}
            style={{
              border: pic === selectedAvatar ? "2px solid #323d6c" : "",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AvatarModal;
