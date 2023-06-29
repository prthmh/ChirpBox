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

export const editProfileService = async (editData, token) => {
  try {
    const res = await axios.post(
      "/api/users/edit",
      { userData: editData },
      { headers: { authorization: token } }
    );
    return res;
  } catch (error) {
    console.error("Error in edit profile service", error);
  }
};

export const followUserService = async (followUserId, token) => {
  try {
    const res = await axios.post(
      `/api/users/follow/${followUserId}`,
      {},
      { headers: { authorization: token } }
    );
    return res;
  } catch (error) {
    console.error("Error in follow service", error);
  }
};

export const unFollowUserService = async (followUserId, token) => {
  try {
    const res = await axios.post(
      `/api/users/unfollow/${followUserId}`,
      {},
      { headers: { authorization: token } }
    );
    return res;
  } catch (error) {
    console.error("Error in follow service", error);
  }
};
