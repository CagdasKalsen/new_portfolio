import "./Mainpage.css";
import { Link } from "react-router-dom";
import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
const mainpage = () => {
  return (
    <div className="main">
      <div className="mask">
        <img classname="intro-img" src={IntroImg} alt="" />
      </div>{" "}
      <div className="content">
        <h1> HELLO, I `M A FULL STACK WEB DEVELOPER</h1>
        <br />
        <p>
          My name is Cagdas Kalsen, and I'm a junior developer with experience
          in full stack web development. I specialize in creating modern,
          responsive and user-friendly web applications using HTML, CSS,
          JavaScript, React, Python, and Django.
          <br />
          <br />
          As a full-stack developer, I'm comfortable working on both the
          front-end and back-end of web applications. On the front-end, I'm
          skilled in creating visually appealing and intuitive user interfaces
          that provide a seamless user experience. I'm also well-versed in using
          React to build complex and dynamic web applications.
          <br />
          <br />
          On the back-end, I have experience with Python and Django, which allow
          me to efficiently build secure and scalable web applications that meet
          the needs of both users and businesses
          <br />
          <br />
          Thank you for taking the time to check out my portfolio! If you're
          interested in collaborating on a project or would like to learn more
          about my skills and experience, please don't hesitate to reach out.
        </p>

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
