import React from "react";
import Navbar from "../components/Navbar";
import Mainpage from "../components/Mainpage";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <h1>
        <Navbar />
        <Mainpage />
        <Footer />
      </h1>
    </div>
  );
};

export default Home;
