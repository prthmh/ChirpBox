import axios from "axios";

export const getPostsOfUser = async (setPostsOnProfile, username) => {
  try {
    const res = await axios.get(`/api/posts/user/${username}`);
    setPostsOnProfile(res.data.posts);
  } catch (error) {
    console.error("Error in getting user posts", error);
  }
};
