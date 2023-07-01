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
    case ACTIONS.SET_USER_FOLLOWS:
      return {
        ...dataState,
        allUsers: dataState.allUsers.map((user) => {
          const updatedUser = payload.find((item) => item._id === user._id);
          return updatedUser ? updatedUser : user;
        }),
      };
    case ACTIONS.UPDATE_AVATAR:
      return {
        ...dataState,
        allUsers: dataState.allUsers.map((user) =>{
          console.log("data reducer",payload)
         return user._id === payload[0]._id
            ? { ...user, profilePic: payload[1] }
            : user
          }
        )
      };
    default:
      return dataState;
  }
};
