import { useContext } from "react";
import { createContext } from "react";
import { useReducer, useEffect } from "react";
import { PostReducer } from "../reducer/PostReducer";
import {
  getPostsService,
  disLikeHandlerService,
  likeHandlerService,
  createNewPostService,
  deletePostService,
  editPostService,
} from "../services/PostServices";
import { ACTIONS } from "../utils/constants";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const { user, token } = useAuth();

  const initialState = {
    allPosts: [],
    userFeedPosts: [],
    postDetails: { content: "" },
    filter: "Latest",
  };

  const [postState, postDispatch] = useReducer(PostReducer, initialState);

  const getPostsFunc = async () => {
    try {
      const {
        status,
        data: { posts },
      } = await getPostsService();
      if (status === 200) {
        postDispatch({ type: ACTIONS.SET_POSTS, payload: posts });
      }
    } catch (error) {
      console.error("Error in getting posts", error);
    }
  };

  // const getPostsOnFeed = () => {
  //   const userPosts = allPosts?.filter(
  //     ({ username }) =>
  //       username === user.username || user.following.includes(username)
  //   );

  //   postDispatch({ type: ACTIONS.SET_POSTS_ON_FEED, payload: userPosts });
  // };

  const likePostFunc = async (postId, token) => {
    try {
      const res = await likeHandlerService(postId, token);
      if (res?.status === 201) {
        postDispatch({ type: ACTIONS.LIKE_POST, payload: res?.data?.posts });
        toast.success("Liked a post");
      }
    } catch (error) {
      console.error("Error in like post function", error);
    }
  };

  const disLikePostFunc = async (postId, token) => {
    try {
      const {
        status,
        data: { posts },
      } = await disLikeHandlerService(postId, token);
      if (status === 201) {
        postDispatch({ type: ACTIONS.DISLIKE_POST, payload: posts });
        toast.success("Disliked a post");
      }
    } catch (error) {
      console.error("Error in dislike post function", error);
    }
  };

  const isPostAlreadyLiked = (post, user) => {
    const isPresent = post?.likes?.likedBy.find(
      (postLiker) => postLiker.username === user.username
    );
    return Boolean(isPresent);
  };

  const createNewPostFunc = async ({ content, media, mediaAlt }) => {
    try {
      const {
        status,
        data: { posts },
      } = await createNewPostService(content, media, mediaAlt, token);
      if (status === 201) {
        postDispatch({ type: ACTIONS.CREATE_NEW_POST, payload: posts });
      }
    } catch (error) {
      console.error("Error occured while creating post", error);
    }
  };

  const deletePostFunc = async (postId) => {
    console.log(token, postId);
    try {
      const {
        status,
        data: { posts },
      } = await deletePostService(postId, token);
      if (status === 201) {
        postDispatch({ type: ACTIONS.DELETE_POST, payload: posts });
        toast.success("Deleted a post");
      }
    } catch (error) {
      console.error("Error in dlete post function", error);
    }
  };

  const editPostFunc = async (postId, { content, mediaURL, mediaAlt }) => {
    try {
      const {
        status,
        data: { posts },
      } = await editPostService(postId, { content, mediaURL, mediaAlt }, token);
      if (status === 201) {
        postDispatch({ type: ACTIONS.EDIT_POST, payload: posts });
      }
    } catch (error) {
      console.error("Error in edit post", error);
    }
  };

  useEffect(() => {
    if (user) {
      getPostsFunc();
    }
  }, [user]);

  // useEffect(() => {
  //   if (allPosts) {
  //     getPostsOnFeed();
  //   }
  //   // eslint-disable-next-line
  // }, [allPosts]);

  return (
    <PostContext.Provider
      value={{
        postState,
        postDispatch,
        likePostFunc,
        disLikePostFunc,
        isPostAlreadyLiked,
        createNewPostFunc,
        deletePostFunc,
        editPostFunc,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
