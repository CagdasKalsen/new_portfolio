import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Works from "../components/Works";
import Work from "../components/Work";
const Projects = () => {
  return (
    <div>
      <Navbar /> {/* <Footer /> */}{" "}
      <Works heading="PROJECTS" text="Some of my recent works" />
      <Work />
    </div>
  );
};

export default Projects;
