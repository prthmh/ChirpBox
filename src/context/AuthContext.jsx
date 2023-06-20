import { useState } from "react";
import { createContext, useContext } from "react";
import { loginService, signUpService } from "../services/AuthServices";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const tokenInLocalStorage = JSON.parse(localStorage.getItem("loginToken"));
  const userInLocalStorage = JSON.parse(localStorage.getItem("userData"));
  const [token, setToken] = useState(tokenInLocalStorage?.token);
  const [user, setUser] = useState(userInLocalStorage?.user);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const userLoginFunc = async ({username, password}) => {
    setIsLoading(true);
    try {
      const res = await loginService(username, password);
      const {
        status,
        data: { encodedToken, foundUser },
      } = res;
      if (status === 200) {
        localStorage.setItem("loginToken", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("userData", JSON.stringify({ user: foundUser }));
        setUser(foundUser);

        navigate(location?.state?.from?.pathname || "/feed", { replace: true });

        //add success toast
      }
    } catch (error) {
      console.error(
        "Login unsuccessful. There was error while logging in",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };

  const userSignUpFunc = async ({
    firstName,
    lastName,
    username,
    password,
  }) => {
    setIsLoading(true);
    try {
      const res = await signUpService(firstName, lastName, username, password);
      const {
        status,
        data: { createdUser, encodedToken },
      } = res;
      if (status === 201) {
        localStorage.setItem("loginToken", JSON.stringify({ token: encodedToken }));
        setToken(encodedToken);
        localStorage.setItem("userData", JSON.stringify({ user: createdUser }));
        setUser(createdUser);

        navigate("/feed", { replace: true });
        //add success toast
      }
    } catch (error) {
      console.error(
        "Signup unsuccessful. There was error while signing up",
        error
      );
    } finally {
      setIsLoading(false);
    }
  };

  const logOutFunc = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("loginToken");
    localStorage.removeItem("signupToken");
    setToken(null);
    setUser(null);
    navigate("/");
    //add logout toast
    toast.success("Loggedout Successfully!")
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        user,
        isLoading,
        userLoginFunc,
        userSignUpFunc,
        logOutFunc,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
