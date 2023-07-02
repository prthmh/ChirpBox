import React from "react";
import "./Profile.css";
// import { usePost } from "../../context/PostContext";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getSingleUser } from "../../utils/getSingleUser";
import Loader from "../../components/Loader/Loader";
import NetworkModal from "../../components/NetworkModal/NetworkModal";
import { getPostsOfUser } from "../../utils/getPostsOfUser";
import PostsSection from "../../components/PostsSection/PostsSection";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";
import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { defaultAvatar, defaultBannerImg } from "../../utils/profileAvatars";
// import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { userId } = useParams();
  // const {
  //   postState: { allPosts },
  // } = usePost();
  const {
    dataState: { allUsers },
  } = useData();
  const { user } = useAuth();
  // console.log("profile",allUsers);
  // const { user } = useAuth();
  const [profileOfUser, setProfileOfUser] = useState({});
  const [postsOnProfile, setPostsOnProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showNetworkModal, setShowNetworkModal] = useState({
    show: false,
    type: "",
    users: [],
  });

  const [showProfileEditModal, setShowProfileEditModal] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getSingleUser(setProfileOfUser, userId);
  }, [userId, allUsers]);

  useEffect(() => {
    getPostsOfUser(setPostsOnProfile, profileOfUser.username, setIsLoading);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [profileOfUser, allUsers]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <img
            className="banner_img"
            src={
              profileOfUser.bannerImg
                ? profileOfUser.bannerImg
                : defaultBannerImg
            }
            alt="banner pic"
          />
          <div className="profile_header">
            <img
              src={
                profileOfUser.profilePic
                  ? profileOfUser.profilePic
                  : defaultAvatar
              }
              alt="user_pic"
              className="profile_img"
            />
            <div onClick={() => setShowProfileEditModal(!showProfileEditModal)}>
              <button>Edit</button>
            </div>
          </div>
          <div className="header_info">
            <h2 style={{ marginBottom: "0" }}>
              {profileOfUser.firstName} {profileOfUser.lastName}
            </h2>
            <span style={{ color: "#71717a" }}>@{profileOfUser.username}</span>
            <p>{profileOfUser.bio}</p>
            {profileOfUser.bio_link && (
              <>
                <i className="fa-solid fa-link"></i>{" "}
                <a
                  href={profileOfUser.bio_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {profileOfUser.bio_link}
                </a>
              </>
            )}
          </div>
          <div className="network">
            <p
              onClick={() =>
                setShowNetworkModal({
                  ...showNetworkModal,
                  show: true,
                  type: "Following",
                  users: profileOfUser?.following,
                })
              }
            >
              {profileOfUser?.following?.length}{" "}
              <span style={{ fontWeight: "bolder", cursor: "pointer" }}>
                {" "}
                Following
              </span>
            </p>
            <p
              onClick={() =>
                setShowNetworkModal({
                  ...showNetworkModal,
                  show: true,
                  type: "Followers",
                  users: profileOfUser?.followers,
                })
              }
            >
              {profileOfUser?.followers?.length}{" "}
              <span style={{ fontWeight: "bolder", cursor: "pointer" }}>
                {" "}
                Followers
              </span>
            </p>
          </div>

          {postsOnProfile?.length > 0 ? (
            postsOnProfile?.map((post) => (
              <PostsSection key={post._id} post={post} />
            ))
          ) : (
            <h4
              style={{
                padding: "0.8rem",
                color: "var(--text-color-dark)",
                textAlign: "center",
              }}
            >
              You have not created any posts
            </h4>
          )}
        </div>
      )}
      {showNetworkModal.show && (
        <div className="modal">
          <NetworkModal
            showNetworkModal={showNetworkModal}
            setShowNetworkModal={setShowNetworkModal}
          />
        </div>
      )}
      {showProfileEditModal && (
        <div className="modal">
          <EditProfileModal
            setShowProfileEditModal={setShowProfileEditModal}
            editUser={user}
          />
        </div>
      )}
    </>
  );
};

export default Profile;
