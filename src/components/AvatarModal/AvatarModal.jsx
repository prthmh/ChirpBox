import React, { useState } from "react";
import "./AvatarModal.css";
import { avatarAry } from "../../utils/profileAvatars";
// import { useAuth } from "../../context/AuthContext";
// import { useData } from "../../context/DataContext";
// import { ACTIONS } from "../../utils/constants";

const AvatarModal = ({ setShowAvatarModal, setSelectedAvatar }) => {
  const [avatar, setavatar] = useState("");
  // const { user, setUser } = useAuth();
  // const { dataDispatch } = useData();

  const handleAvatar = () => {
    // setUser((prevState) => ({ ...prevState, profilePic: avatar }));
    // dataDispatch({
    //   type: ACTIONS.UPDATE_AVATAR,
    //   payload: [user, avatar],
    // });
    setSelectedAvatar(avatar);
    setShowAvatarModal(false);
  };

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
        {avatarAry?.map((pic, i) => (
          <img
            key={i}
            src={pic}
            alt="avatar"
            className="avatar_pic"
            onClick={() => setavatar(pic)}
            style={{
              border:
                pic === avatar
                  ? "2px solid #323d6c"
                  : "2px solid var(--bg3-color)",
            }}
          />
        ))}
      </div>
      <button onClick={handleAvatar}>Save</button>
    </div>
  );
};

export default AvatarModal;
