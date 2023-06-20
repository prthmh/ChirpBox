import React from "react";
import "./PostsSection.css";
import { useData } from "../../context/DataContext";

const PostsSection = ({ post }) => {
  const {
    dataState: { allUsers },
  } = useData();
  const postOfUser = allUsers?.find(
    ({ username }) => username === post.username
  );
  return (
    <div className="post_card">
      <img src={postOfUser.profilePic} className="user_pic" alt="user profile" />
      <div className="post_content">
        <h4 style={{ margin: "0", display:"inline-block"}}>
          {postOfUser.firstName} {postOfUser.lastName} 
        </h4>{" "}
        <span style={{color: "#71717a"}}>@{postOfUser.username}</span>
        <p>{post.content}</p>
        <img src={post.postPic} alt="post pic"/>
      </div>
    </div>
  );
};

export default PostsSection;
