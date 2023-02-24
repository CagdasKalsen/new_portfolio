import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            Boston,Massachusetts
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />{" "}
                617-583-2366
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />{" "}
                cagdaskalsen@gmail.com
              </h4>
            </div>
          </div>
        </div>
        <div className="right"> </div>
      </div>
    </div>
  );
};

export default Footer;
