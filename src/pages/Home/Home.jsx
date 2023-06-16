import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import chripbox_logo_2  from '../../assets/chripbox_logo_2.png';

const Home = () => {
  return (
    <section className="home">
      <div className="home_page">
        <img src={chripbox_logo_2} alt="logo" />
        <h1 className="home_page_heading" > Welcome to ChirpBox</h1>
        <Link to="/signup">
          <button className="join_btn" >Join Now</button>
        </Link>
        <br/>
        <Link to="/login">
          <button className="acc_btn" >Already Have an acc</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
