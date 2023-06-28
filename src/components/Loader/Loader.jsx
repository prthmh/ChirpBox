import React from "react";
import "./Loader.css";
import loaderSvg from "../../assets/chripbox_loader.svg";

const Loader = () => {
  return (
    <div className="center_loader">
      <div className="loader_wrapper">
        <img src={loaderSvg} alt="Loading..." />
      </div>
    </div>
  );
};

export default Loader;
