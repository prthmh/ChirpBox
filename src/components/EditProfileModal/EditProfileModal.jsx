import React from "react";
import "./EditProfileModal.css";
import { useState } from "react";
import { useData } from "../../context/DataContext";
import AvatarModal from "../AvatarModal/AvatarModal";
import { useAuth } from "../../context/AuthContext";
import { defaultAvatar, defaultBannerImg } from "../../utils/profileAvatars";
import { toast } from "react-toastify";
import { uploadMedia } from "../../utils/uploadMedia";

const EditProfileModal = ({ setShowProfileEditModal, editUser }) => {
  const { user } = useAuth();

  const [editData, setEditData] = useState(user);
  const { editProfileFunc } = useData();

  const [showAvatarModal, setShowAvatarModal] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [profileImg, setProfileImg] = useState(editUser.profilePic);
  const [selectedBannerPic, setSelectedBannerPic] = useState(
    editUser.bannerImg
  );

  const inputChangeHandler = (event) => {
    setEditData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const editProfileHandler = (event) => {
    event.preventDefault();
    editProfileFunc({
      ...editData,
      profilePic: selectedAvatar ? selectedAvatar : profileImg,
      bannerImg: selectedBannerPic ? selectedBannerPic : editUser.bannerImg,
    });
    setShowProfileEditModal(false);
  };

  const uploadEditedUserMedia = async (media, type) => {
    if (type === "profilePic") {
      const res = await uploadMedia(media);
      setProfileImg(res.url);
    } else if (type === "bannerImg") {
      const res = await uploadMedia(media);
      setSelectedBannerPic(res.url);
    }
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
          src={selectedBannerPic ? selectedBannerPic : defaultBannerImg}
          alt="banner img"
          className="edit_banner_img"
        />
        <img
          src={
            selectedAvatar
              ? selectedAvatar
              : profileImg
              ? profileImg
              : defaultAvatar
          }
          alt="user_pic"
          className="edit_img"
        />
        <button
          onClick={() => setShowAvatarModal(!showAvatarModal)}
          className="edit_modal_btn"
        >
          Select Avatar
        </button>
        <div className="edit_media_upload">
          <label onClick={(e) => e.stopPropagation()}>
            <span className="upload_label">Upload an Profile image</span>
            <input
              type="file"
              accept="image/*"
              className="edit_img_upl"
              onChange={(e) => {
                e.stopPropagation();
                setSelectedAvatar(null);
                if (Math.round(e.target.files[0]?.size / 1024000) > 1) {
                  toast.warn("File size should be below 1MB", {
                    position: "top-right",
                  });
                } else {
                  setProfileImg(URL.createObjectURL(e.target.files[0]));
                  uploadEditedUserMedia(e.target.files[0], "profilePic");
                }
              }}
            />
          </label>
          <label>
            <span className="upload_label">Upload banner image</span>
            <input
              type="file"
              accept="image/*"
              className="edit_img_upl"
              onChange={(e) => {
                e.stopPropagation();
                if (Math.round(e.target.files[0]?.size / 1024000) > 2) {
                  toast.warn("File size should be below 2MB", {
                    position: "top-right",
                  });
                } else {
                  setSelectedBannerPic(URL.createObjectURL(e.target.files[0]));
                  uploadEditedUserMedia(e.target.files[0], "bannerImg");
                }
              }}
            />
          </label>
        </div>
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
        <button type="submit" className="save_btn edit_modal_btn">
          Save
        </button>
      </form>
      {showAvatarModal && (
        <div className="avatar_modal">
          <AvatarModal
            setShowAvatarModal={setShowAvatarModal}
            setSelectedAvatar={setSelectedAvatar}
          />
        </div>
      )}
    </div>
  );
};

export default EditProfileModal;
