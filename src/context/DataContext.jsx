import { createContext, useContext, useReducer } from "react";
import { DataReducer } from "../reducer/DataReducer";
import { getPostsService, getUsersService } from "../services/DataServies";
import { useEffect } from "react";
import { ACTIONS } from "../utils/constants";
import { useAuth } from "./AuthContext";

export const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const { user } = useAuth();
  const [dataState, dataDispatch] = useReducer(DataReducer, {
    allUsers: [],
    allPosts: [],
    userFeedPosts: [],
    bookmarkedPosts: [],
  });

  const { allPosts } = dataState;

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

  const getPostsFunc = async () => {
    try {
      const {
        status,
        data: { posts },
      } = await getPostsService();
      if (status === 200) {
        dataDispatch({ type: ACTIONS.SET_POSTS, payload: posts });
      }
    } catch (error) {
      console.error("Error in getting posts", error);
    }
  };

  const getPostsOnFeed = () => {
    const userPosts = allPosts?.filter(
      ({ username }) =>
        username === user.username || user.following.includes(username)
    );

    dataDispatch({ type: ACTIONS.SET_POSTS_ON_FEED, payload: userPosts });
  };

  useEffect(() => {
    if (user) {
      getUsersFunc();
      getPostsFunc();
      getPostsOnFeed();
    }
    // eslint-disable-next-line
  }, [user]);
  return (
    <DataContext.Provider value={{ dataState, dataDispatch, getUsersFunc }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
