import axios from "axios";

export const getSingleUser = async (setProfileOfUser, userId) => {
  try {
    const res = await axios.get(`/api/users/${userId}`);
    setProfileOfUser(res.data.user);
  } catch (error) {
    console.error("Error in getting user", error);
  } 
  // finally {
  //   setIsLoading(false);
  // }
};
