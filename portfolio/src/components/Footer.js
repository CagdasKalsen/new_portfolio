import "./Footer.css";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "white", marginRight: "2rem" }} />
            <div>
              <p>Boston , MA</p>
            </div>
            <br />
            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                <div>
                  <p>617-583-2366</p>
                </div>
              </h4>
            </div>
            <br />
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "white", marginRight: "2rem" }}
                />
                <div>
                  <p>cagdaskalsen@gmail.com</p>
                </div>
              </h4>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <a
              href="https://www.linkedin.com/in/cagdaskalsensoftwareengineer/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
            <a
              href="https://github.com/CagdasKalsen"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub
                size={30}
                style={{ color: "white", marginRight: "2rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
