import React from "react";
import { FaFacebook, FaYoutube, FaInstagram, FaPlane } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer">
      <address>
        <FaPlane />
        <i>Multan, Punjab, Pakistan</i>
      </address>
      <p>&copy; 2024, All rights reserved by TWC</p>
      <div className="social-icons">
        <div className="facebook">
          <FaFacebook />
        </div>
        <div className="youtube">
          <FaYoutube />
        </div>
        <div className="insta">
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
