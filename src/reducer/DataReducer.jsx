import { ACTIONS } from "../utils/constants";

export const DataReducer = (dataState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_USERS:
      return { ...dataState, allUsers: payload };
    case ACTIONS.SET_BOOKMARKS:
      return { ...dataState, bookmarks: payload };
    case ACTIONS.ADD_TO_BOOKMARK:
      return { ...dataState, bookmarks: payload };
    case ACTIONS.REMOVE_BOOKMARK:
      return { ...dataState, bookmarks: payload };
    case ACTIONS.EDIT_PROFLE:
      return {
        ...dataState,
        allUsers: dataState.allUsers.map((user) =>
          user._id === payload._id ? payload : user
        ),
      };
    default:
      return dataState;
  }
};
