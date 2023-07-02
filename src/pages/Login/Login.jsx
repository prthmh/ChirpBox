import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./Login.css";

const Login = () => {
  const { token, userLoginFunc } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loginData, setLoginData] = useState({ username: "", password: "" });

  const inputChangeHandler = (event) => {
    setLoginData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const loginHandler = (event) => {
    event.preventDefault();
    const { username, password } = loginData;
    if (event.target.textContent === "Login As Guest") {
      setLoginData({ username: "prxthmxsh", password: "prat@123" });
      userLoginFunc({ username: "prxthmxsh", password: "prat@123" });
    } else {
      if (!username || !password) {
        toast.error("Kindly fill all the details.");
      } else {
        userLoginFunc(loginData);
      }
    }
  };

  if (token) {
    setTimeout(() => {
      navigate(location?.state?.form?.pathname || "/feed", {
        replace: true,
      });
    }, 200);
  }

  return (
    <div className="login_page">
      <div className="login_content">
        <h2 style={{ margin: "0" }}>Login</h2>
        <form className="login_form">
          <label className="login_label">
            Username
            <input
              type="text"
              name="username"
              placeholder="Enter your user name"
              value={loginData.username}
              onChange={inputChangeHandler}
              className="login_input"
            />
          </label>
          <label className="login_label">
            Password
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={loginData.password}
              onChange={inputChangeHandler}
              className="login_input"
            />
          </label>
          <label>
            <input type="checkbox" />
            Remember me
          </label>
          <button className="login_btn" onClick={loginHandler}>
            Login
          </button>
          <button className="guest_btn" onClick={loginHandler}>
            Login As Guest
          </button>
          <div onClick={() => navigate("/signup")} className="new_acc_btn">
            Create New Account
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
