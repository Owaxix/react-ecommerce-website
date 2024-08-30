import React from "react";
import "./Footer.css";
import footerLogo from "../Assets/logo.png";
import instagram from "../Assets/instagram_icon.png";
import pintester from "../Assets/pintester_icon.png";
import whatsapp from "../Assets/whatsapp_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footerLogo} alt="Not Found" />
        <p>StyleNest</p>
        <ul className="footerLinks">
          <li>Company</li>
          <li>Product</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        <div className="footer-social-icon">
          <div className="footer-icon-contanier">
            <img src={instagram} alt="Not Found" />
          </div>

          <div className="footer-icon-contanier">
            <img src={pintester} alt="Not Found" />
          </div>

          <div className="footer-icon-contanier">
            <img src={whatsapp} alt="Not Found" />
          </div>
        </div>
        <div className="footer-copyright">
          <hr />
          <p>Copyright © 2024 - All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
