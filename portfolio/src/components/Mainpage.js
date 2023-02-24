import "./Mainpage.css";
import { Link } from "react-router-dom";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
const mainpage = () => {
  return (
    <div className="main">
      <div className="mask">
        <img classname="intro-img" src={IntroImg} alt="" />
      </div>
      <div className="content">
        <p>Hello , I`M A FULL STACK WEB DEVELOPER</p>
        <h1>Lorem ipsum</h1>
        <Link to="/projects" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default mainpage;
