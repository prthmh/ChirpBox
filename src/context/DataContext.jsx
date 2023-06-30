import { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import {
  addToBookmarksService,
  editProfileService,
  followUserService,
  getUsersService,
  removeFromBookmarksService,
  unFollowUserService,
} from "../services/DataServices";
import { useEffect } from "react";
import { ACTIONS } from "../utils/constants";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const { user, setUser, token } = useAuth();
  const [dataState, dataDispatch] = useReducer(DataReducer, {
    allUsers: [],
    bookmarks: [],
  });

  const getUsersFunc = async () => {
    try {
      const {
        status,
        data: { users },
      } = await getUsersService();
      if (status === 200) {
        dataDispatch({ type: ACTIONS.SET_USERS, payload: users });
      }
    } catch (error) {
      console.error("Error in getting users", error);
    }
  };

  const addToBookMarksFunc = async (postId, token) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await addToBookmarksService(postId, token);
      if (status === 200) {
        dataDispatch({ type: ACTIONS.ADD_TO_BOOKMARK, payload: bookmarks });
        toast.success("Added to bookmarks");
      }
    } catch (error) {
      console.error("Error in addto bookmark func", error);
    }
  };

  const removeFromBookmarksFunc = async (postId, token) => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await removeFromBookmarksService(postId, token);
      if (status === 200) {
        dataDispatch({ type: ACTIONS.REMOVE_BOOKMARK, payload: bookmarks });
        toast.success("Post was removed from bookmarks");
      }
    } catch (error) {
      console.error("Error in removing bookmark func", error);
    }
  };

  const isPostAlreadyBookmarked = (postId, bookmarks) => {
    return bookmarks.find((bookmark) => bookmark === postId);
  };

  const editProfileFunc = async (editData) => {
    try {
      const {
        status,
        data: { user },
      } = await editProfileService(editData, token);
      if (status === 201) {
        dataDispatch({ type: ACTIONS.EDIT_PROFLE, payload: user });
        setUser(user);
        toast.success("Profile edited successfully");
      }
    } catch (error) {
      console.error("Error in edit profile", error);
    }
  };

  const followUserFunc = async (followUserId) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await followUserService(followUserId, token);
      if (status === 200) {
        dataDispatch({
          type: ACTIONS.SET_USER_FOLLOWS,
          payload: [user, followUser],
        });
        setUser(user);
        toast.success(`You followed ${followUser?.username}`);
      }
    } catch (error) {
      console.error("Error in follow func", error);
    }
  };

  const unfollowUserFunc = async (followUserId) => {
    try {
      const {
        status,
        data: { user, followUser },
      } = await unFollowUserService(followUserId, token);
      if (status === 200) {
        dataDispatch({
          type: ACTIONS.SET_USER_FOLLOWS,
          payload: [user, followUser],
        });
        setUser(user);
        toast.success(`You Unfollowed ${followUser?.username}`);
      }
    } catch (error) {
      console.error("Error in unfollow func", error);
    }
  };

  const isAlreadyFollowed = (userId) => {
    const isPresent = user?.following?.find(({ _id }) => _id === userId);
   
    return Boolean(isPresent);
  };

  useEffect(() => {
    getUsersFunc();
  }, []);

  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        addToBookMarksFunc,
        removeFromBookmarksFunc,
        isPostAlreadyBookmarked,
        editProfileFunc,
        followUserFunc,
        unfollowUserFunc,
        isAlreadyFollowed,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
