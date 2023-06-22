import { ACTIONS } from "../utils/constants";

export const PostReducer = (postState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_POSTS:
      return { ...postState, allPosts: payload };
    case ACTIONS.SET_POSTS_ON_FEED:
      return { ...postState, userFeedPosts: payload };
    case ACTIONS.LIKE_POST:
      return { ...postState, allPosts: payload };
    case ACTIONS.DISLIKE_POST:
      return { ...postState, allPosts: payload };
    default:
      return postState;
  }
};
