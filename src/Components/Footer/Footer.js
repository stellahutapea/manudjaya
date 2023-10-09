// Footer.js

import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h1>Desa Manud Jaya</h1>
          <p>Desa Digital Kesayangan Anda</p>
        </div>
        <div className="footer-info">
          <p>
            
            <br />
            Email:{" "}
            <a href="mailto:info@desamanudjaya.com"></a>
          </p>
        </div>
        <div className="footer-social">
          <h3></h3>
          <div className="social-icons">
            <a href="#" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p></p>
      </div>
    </footer>
  );
};

export default Footer;
