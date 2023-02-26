import React from "react";
import Navbar from "../components/Navbar";
import Works from "../components/Works";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <Navbar />
      <Works heading="ABOUT" text="I am a Full-Stack Web Developer" />
    </div>
  );
};

export default About;
