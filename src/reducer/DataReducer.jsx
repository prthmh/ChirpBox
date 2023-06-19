import { ACTIONS } from "../utils/constants";

export const DataReducer = (dataState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_USERS:
      return { ...dataState, allUsers: payload };
    case ACTIONS.SET_POSTS:
      return { ...dataState, allPosts: payload };
    case ACTIONS.SET_POSTS_ON_FEED:
      return { ...dataState, userFeedPosts: payload };
    default:
      return dataState;
  }
};
