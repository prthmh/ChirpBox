import axios from "axios";
export const getUsersService = async () => {
  try {
    const res = await axios.get("/api/users");
    return res;
  } catch (error) {
    console.error("Error in getUsers service", error);
  }
};

export const getPostsService = async () => {
  try {
    const res = await axios.get("/api/posts");
    return res;
  } catch (error) {
    console.error("Error in getPosts service", error);
  }
};
