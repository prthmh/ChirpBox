import { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import {
  addToBookmarksService,
  getUsersService,
  removeFromBookmarksService,
} from "../services/DataServices";
import { useEffect } from "react";
import { ACTIONS } from "../utils/constants";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const { user} = useAuth();
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

  useEffect(() => {
    if (user) {
      getUsersFunc();
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <DataContext.Provider
      value={{
        dataState,
        dataDispatch,
        addToBookMarksFunc,
        removeFromBookmarksFunc,
        isPostAlreadyBookmarked,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
