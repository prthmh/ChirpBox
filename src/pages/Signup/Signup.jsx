import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { defaultAvatar, defaultBannerImg } from "../../utils/profileAvatars";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    acceptTermsCond: false,
    profilePic: defaultAvatar,
    bannerImg: defaultBannerImg,
  });
  const { userSignUpFunc } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    pwd: false,
    confirmPwd: false,
  });

  const inputChangeHandler = (event) => {
    setSignUpData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const signUphandler = (event) => {
    event.preventDefault();
    const { password, confirmpassword } = signUpData;
    if (password.length < 6) {
      toast.error("Your password should have more than 6 characters");
    } else if (password !== confirmpassword) {
      toast.error("Your password should match");
    } else {
      console.log("signup data", signUpData);
      userSignUpFunc(signUpData);
    }
  };

  return (
    <div className="login_page">
      <div className="login_content">
        <h2 style={{ margin: "0" }}>Sign up</h2>
        <form className="login_form" onSubmit={signUphandler}>
          <label className="login_label">
            First Name
            <input
              type="text"
              name="firstName"
              placeholder="Enter your name"
              value={signUpData.firstName}
              onChange={inputChangeHandler}
              required
              className="login_input"
            />
          </label>
          <label className="login_label">
            Last Name
            <input
              type="text"
              name="lastName"
              placeholder="Enter your name"
              value={signUpData.lastName}
              onChange={inputChangeHandler}
              required
              className="login_input"
            />
          </label>
          <label className="login_label">
            Username
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={signUpData.username}
              onChange={inputChangeHandler}
              required
              className="login_input"
            />
          </label>
          <label className="login_label">
            Email Address
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={signUpData.email}
              onChange={inputChangeHandler}
              required
              className="login_input"
            />
          </label>
          <label className="login_label">
            Password
            <input
              type={showPassword.pwd ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              value={signUpData.password}
              onChange={inputChangeHandler}
              required
              className="login_input"
            />
            <span
              onClick={() =>
                setShowPassword((prevState) => ({
                  ...prevState,
                  pwd: !showPassword.pwd,
                }))
              }
            >
              {showPassword.pwd ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </span>
          </label>
          <label className="login_label">
            Confirm Password
            <input
              type={showPassword.confirmPwd ? "text" : "password"}
              name="confirmpassword"
              placeholder="Enter your password again"
              value={signUpData.confirmpassword}
              onChange={inputChangeHandler}
              required
              className="login_input"
            />
            <span
              onClick={() =>
                setShowPassword((prevState) => ({
                  ...prevState,
                  confirmPwd: !showPassword.confirmPwd,
                }))
              }
            >
              {showPassword.confirmPwd ? (
                <i className="fa-solid fa-eye-slash"></i>
              ) : (
                <i className="fa-solid fa-eye"></i>
              )}
            </span>
          </label>
          <label>
            <input
              type="checkbox"
              checked={signUpData.acceptTermsCond}
              required
              onChange={() => {
                setSignUpData((data) => ({
                  ...data,
                  acceptTermsCond: !signUpData.acceptTermsCond,
                }));
              }}
            />
            I accept the Terms and Conditions
          </label>
          <button type="submit" className="login_btn">
            Create new Account
          </button>
          <div onClick={() => navigate("/login")} className="new_acc_btn">
            Already have an account
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
