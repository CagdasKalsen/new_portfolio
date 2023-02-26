import React, { Component } from "react";
import Footer from "./Footer";
import "./Works.css";

class Works extends Component {
  render() {
    return (
      <div className="work-img">
        <div className="heading">
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Works;
