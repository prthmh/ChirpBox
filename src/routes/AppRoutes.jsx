import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Mockman from "mockman-js";
import PrivateRoute from "./PrivateRoute";
import Feed from "../pages/Feed/Feed";
import Explore from "../pages/Explore/Explore";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Profile from "../pages/Profile/Profile";
import Bookmark from "../pages/Bookmark/Bookmark";
import PageTemplate from "../pages/PageTemplate/PageTemplate";

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route element={<PrivateRoute />}> */}
        <Route
          path="/feed"
          element={
            <PrivateRoute>
              <PageTemplate>
                <Feed />
              </PageTemplate>
            </PrivateRoute>
          }
        />
        <Route
          path="/bookmarks"
          element={
            <PrivateRoute>
              <PageTemplate>
                <Bookmark />
              </PageTemplate>
            </PrivateRoute>
          }
        />
        <Route
          path="/explore"
          element={
            <PrivateRoute>
              <PageTemplate>
                <Explore />
              </PageTemplate>
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/:userId"
          element={
            <PrivateRoute>
              <PageTemplate>
                <Profile />
              </PageTemplate>
            </PrivateRoute>
          }
        />
        {/* </Route> */}
      </Routes>
    </div>
  );
};

export default AppRoutes;
