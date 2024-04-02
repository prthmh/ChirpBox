import axios from "axios";

export const loginService = async (username, password) => {
  try {
    const res = await axios.post("/api/auth/login", { username, password });
    return res;
  } catch (error) {
    console.error("Error in loginService function", error);
  }
};
 
export const signUpService = async (
  firstName,
  lastName,
  username,
  email,
  password
) => {
  try {
    const res = await axios.post("/api/auth/signup", {
      firstName,
      lastName,
      username,
      email,
      password,
    });
    return res;
  } catch (error) {
    console.error("Error in signUpService function", error);
  }
};
