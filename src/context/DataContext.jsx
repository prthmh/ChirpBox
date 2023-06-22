import { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import {
  addToBookmarksService,
  getBookmarksService,
  getUsersService,
  removeFromBookmarksService,
} from "../services/DataServices";
import { useEffect } from "react";
import { ACTIONS } from "../utils/constants";
import { useAuth } from "./AuthContext";
import { toast } from "react-toastify";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const { user, token } = useAuth();
  const [dataState, dataDispatch] = useReducer(DataReducer, {
    allUsers: [],
    bookmarks: [],
  });

  // const { bookmarks } = dataState;
  // console.log("data context", bookmarks);
  // console.log("data context user", user.bookmarks)
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

  const getBookmarksFunc = async () => {
    try {
      const {
        status,
        data: { bookmarks },
      } = await getBookmarksService(token);
      if (status === 200) {
        dataDispatch({ type: ACTIONS.SET_BOOKMARKS, payload: bookmarks });
      }
    } catch (error) {
      console.error("Error in get bookmarks func", error);
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

  // const isPostAlreadyBookmarked = (postId) => {
  //   const bookmarkFind = bookmarks?.find(({ _id }) => _id === postId);
  //   console.log("is in bookmark", bookmarkFind);
  //   return Boolean(bookmarkFind);
  // };
  const isPostAlreadyBookmarked = (postId, bookmarks) => {
    // console.log("present in bookmarks",bookmarks.find((bookmark) => bookmark === postId))
    return bookmarks.find((bookmark) => bookmark === postId);
  };

  useEffect(() => {
    getUsersFunc();
    if (user) {
      getBookmarksFunc();
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
