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
    case ACTIONS.CREATE_NEW_POST:
      return { ...postState, allPosts: payload };
    case ACTIONS.DELETE_POST:
      return { ...postState, allPosts: payload };
    case ACTIONS.EDIT_POST:
      return { ...postState, allPosts: payload };
    case ACTIONS.FILTER_POST:
      return { ...postState, filter: payload };
    default:
      return postState;
  }
};
