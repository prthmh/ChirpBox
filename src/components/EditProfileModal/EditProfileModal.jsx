import React from "react";
import "./EditProfileModal.css";
import { useState } from "react";
import { useData } from "../../context/DataContext";
import AvatarModal from "../AvatarModal/AvatarModal";
import { useAuth } from "../../context/AuthContext";
import { defaultAvatar } from "../../utils/profileAvatars";

const EditProfileModal = ({ setShowProfileEditModal, editUser }) => {
  const { user } = useAuth();

  const [editData, setEditData] = useState(user);
  const { editProfileFunc } = useData();

  const [showAvatarModal, setShowAvatarModal] = useState(false);
  // const [selectedAvatar, setSelectedAvatar] = useState(null);

  const inputChangeHandler = (event) => {
    setEditData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const editProfileHandler = (event) => {
    event.preventDefault();
    editProfileFunc({ ...editData, profilePic: user.profilePic });
    // console.log("edit data modal", editData);
    setShowProfileEditModal(false);
  };

  return (
    <div className="profile_modal"> 
      <div className="modal_header">
        <h2 style={{ margin: "0" }}>Edit Profile</h2>
        <div
          className="close_btn"
          onClick={() => setShowProfileEditModal(false)}
          style={{ cursor: "pointer" }}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </div>
      </div>
      <div className="edit_pic">
        <img
          src={editUser.profilePic ? editUser.profilePic : defaultAvatar}
          alt="user_pic"
          className="edit_img"
        />
        <button onClick={() => setShowAvatarModal(!showAvatarModal)}>
          Select Avatar
        </button>
      </div>

      <form className="edit_form" onSubmit={editProfileHandler}>
        <label className="edit_label">
          First Name
          <input
            type="text"
            name="firstName"
            value={editData.firstName}
            onChange={inputChangeHandler}
            className="edit_input"
          />
        </label>
        <label className="edit_label">
          Last Name
          <input
            type="text"
            name="lastName"
            value={editData.lastName}
            onChange={inputChangeHandler}
            className="edit_input"
          />
        </label>
        <label className="edit_label">
          Profile url
          <input
            type="text"
            name="bio_link"
            value={editData.bio_link}
            onChange={inputChangeHandler}
            className="edit_input"
          />
        </label>

        <label className="edit_label">
          Bio
          <input
            type="text"
            name="bio"
            value={editData.bio}
            onChange={inputChangeHandler}
            className="edit_input"
          />
        </label>
        <button type="submit">Save</button>
      </form>
      {showAvatarModal && (
        <div className="avatar_modal">
          <AvatarModal setShowAvatarModal={setShowAvatarModal} />
        </div>
      )}
    </div>
  );
};

export default EditProfileModal;
