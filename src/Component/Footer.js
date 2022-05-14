import React from "react";
import "../Style/Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-branding">
        @ 2022 <span>Intranet Team</span>
      </div>
      <div className="footer-item">
        <ul>
          <li>Intranet Team</li>
          <li>About</li>
          <li>Blog</li>
          <li>Licence</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
