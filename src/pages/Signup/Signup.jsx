import React from "react";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    fullname: "",
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
    acceptTermsCond: false,
  });
  const { userSignUpFunc } = useAuth();
  const navigate = useNavigate();

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
      userSignUpFunc(signUpData);
    }
  };

  return (
    <div className="login_page">
      <div className="login_content">
        <h2 style={{margin: "0"}}>Sign up</h2>
        <form className="login_form" onSubmit={signUphandler}>
          <label className="login_label">
            Full Name
            <input
              type="text"
              name="fullname"
              placeholder="Enter your name"
              value={signUpData.fullname}
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
              type="password"
              name="password"
              placeholder="Enter your password"
              value={signUpData.password}
              onChange={inputChangeHandler}
              required
              className="login_input"
            />
          </label>
          <label className="login_label">
            Confirm Password
            <input
              type="password"
              name="confirmpassword"
              placeholder="Enter your password again"
              value={signUpData.confirmpassword}
              onChange={inputChangeHandler}
              required
              className="login_input"
            />
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
          <button type="submit" className="login_btn">Create new Account</button>
          <div onClick={() => navigate("/login")} className="new_acc_btn">Already have an account</div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
