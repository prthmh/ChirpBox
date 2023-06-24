import { useContext } from "react";
import { createContext } from "react";
import { useReducer, useEffect } from "react";
import { PostReducer } from "../reducer/PostReducer";
import {
  getPostsService,
  disLikeHandlerService,
  likeHandlerService,
  createNewPostService,
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
    filter: "latest",
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
    console.log(postId, token);
    try {
      const res = await likeHandlerService(postId, token);
      if (res?.status === 201) {
        postDispatch({ type: ACTIONS.LIKE_POST, payload: res?.data?.posts });
        console.log("liked a post");
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
    // console.log("is present", isPresent);
    return Boolean(isPresent);
  };

  console.log("before create", postState.allPosts);
  const createNewPostFunc = async ({ content }) => {
    try {
      const {
        status,
        data: { posts },
      } = await createNewPostService(content, token);
      if (status === 201) {
        postDispatch({ type: ACTIONS.CREATE_NEW_POST, payload: posts });
        console.log("create new post", posts);
      }
    } catch (error) {
      console.error("Error occured while creating post", error);
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
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
