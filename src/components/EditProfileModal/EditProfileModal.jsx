import React from "react";
import "./EditProfileModal.css";
import { useState } from "react";
import { useData } from "../../context/DataContext";

const EditProfileModal = ({ setShowProfileEditModal, editUser }) => {
  const [editData, setEditData] = useState(editUser);
  const { editProfileFunc } = useData();

  const inputChangeHandler = (event) => {
    setEditData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const editProfileHandler = (event) => {
    event.preventDefault();
    editProfileFunc(editData);
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
        <img src={editUser.profilePic} alt="user_pic" className="edit_img" />
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
          Username
          <input
            type="text"
            name="username"
            value={editData.username}
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
          {/* <textarea
            name="username"
            value={editData.bio}
            onChange={inputChangeHandler}
            
            className="edit_input edit_textarea"
          ></textarea> */}
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
    </div>
  );
};

export default EditProfileModal;
