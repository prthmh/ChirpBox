import axios from "axios";

export const getPostsService = async () => {
  try {
    const res = await axios.get("/api/posts");
    return res;
  } catch (error) {
    console.error("Error in getPosts service", error);
  }
};

export const likeHandlerService = async (postId, token) =>
  await axios.post(
    `/api/posts/like/${postId}`,
    {},
    { headers: { authorization: token } }
  );

export const disLikeHandlerService = async (postId, token) => {
  try {
    const res = await axios.post(
      `/api/posts/dislike/${postId}`,
      {},
      { headers: { authorization: token } }
    );
    return res;
  } catch (error) {
    console.error("Error in dislikehandlerService", error);
  }
};

export const createNewPostService = async (content, token) => {
  try {
    const res = await axios.post(
      "/api/posts",
      { postData: { content: content } },
      { headers: { authorization: token } }
    );
    return res;
  } catch (error) {
    console.error("Error in create new post service", error);
  }
};

export const deletePostService = async (postId, token) =>
  await axios.delete(`/api/posts/${postId}`, {
    headers: { authorization: token },
  });
