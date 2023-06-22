import axios from "axios";
export const getUsersService = async () => {
  try {
    const res = await axios.get("/api/users");
    return res;
  } catch (error) {
    console.error("Error in getUsers service", error);
  }
};

export const getBookmarksService = async (token) =>
  axios.get("/api/users/bookmark", {
    headers: { authorization: token },
  });

export const addToBookmarksService = async (postId, token) => {
  try {
    const res = await axios.post(
      `/api/users/bookmark/${postId}`,
      {},
      { headers: { authorization: token } }
    );
    return res;
  } catch (error) {
    console.error("Error in add bookmark service", error);
  }
};

export const removeFromBookmarksService = async (postId, token) => {
  try {
    const res = await axios.post(
      `/api/users/remove-bookmark/${postId}`,
      {},
      { headers: { authorization: token } }
    );
    return res;
  } catch (error) {
    console.error("Error in removing bookmark service", error);
  }
};
