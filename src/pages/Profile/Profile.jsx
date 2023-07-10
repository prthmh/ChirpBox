import React, { useState, useEffect } from "react";
import { usePost } from "../../context/PostContext";
import { useNavigate, useParams } from "react-router-dom";
import "./Profile.css";

import { useData } from "../../context/DataContext";
import { useAuth } from "../../context/AuthContext";
import { getSingleUser } from "../../utils/getSingleUser";
import Loader from "../../components/Loader/Loader";
import NetworkModal from "../../components/NetworkModal/NetworkModal";
import { getPostsOfUser } from "../../utils/getPostsOfUser";
import PostsSection from "../../components/PostsSection/PostsSection";
import EditProfileModal from "../../components/EditProfileModal/EditProfileModal";
import { defaultAvatar, defaultBannerImg } from "../../utils/profileAvatars";
// import { useAuth } from "../../context/AuthContext";

const Profile = () => {
  const { userId } = useParams();
  const {
    postState: { allPosts },
  } = usePost();
  const {
    dataState: { allUsers },
    followUserFunc,
    unfollowUserFunc,
    isAlreadyFollowed,
  } = useData();
  const { user, logOutFunc } = useAuth();

  const navigate = useNavigate();

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
  }, [profileOfUser, allUsers, allPosts]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="back">
            <div className="back_icon" onClick={() => navigate(-1)}>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
            <div className="header_name">
              <h3>
                {" "}
                {profileOfUser.firstName} {profileOfUser.lastName}
              </h3>
              <p style={{ margin: "0", color: "rgb(113, 113, 122)" }}>
                {postsOnProfile?.length} Post
              </p>
            </div>
          </div>
          <img
            className="banner_img"
            src={
              profileOfUser.bannerImg
                ? profileOfUser.bannerImg
                : defaultBannerImg
            }
            alt="banner pic"
          />
          <div className="header_wrapper">
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
              <div className="header_btns" >
                <p
                  onClick={logOutFunc}
                  style={{ cursor: "pointer" }}
                  className="logout_btn"
                >
                  <i className="fa-solid fa-right-from-bracket"></i>
                  <span className="logout_text">Logout</span>
                </p>
                {user?.username === profileOfUser?.username ? (
                  <button
                    className="btn profile_action_btn"
                    onClick={() =>
                      setShowProfileEditModal(!showProfileEditModal)
                    }
                  >
                    <i className="fa-solid fa-pen-to-square"></i> Edit Profile
                  </button>
                ) : isAlreadyFollowed(profileOfUser._id) ? (
                  <button
                    onClick={() => unfollowUserFunc(profileOfUser._id)}
                    className="btn unfollow profile_action_btn"
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => followUserFunc(profileOfUser._id)}
                    className="btn follow profile_action_btn"
                  >
                    Follow
                  </button>
                )}
              </div>
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
              Account has no posts
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
