import React from "react";

import "./footer-section.styles.scss";
import AboutUs from "./about-us.component";
import Opening from "./opening.components";
import QuickLinks from "./quick-links.component";

const FooterSection = () => {
  return (
    <div className="footer-section">
      <div className="footer-grid">
        <AboutUs />
        <Opening />
        <QuickLinks />
      </div>
      <div className="author">
        <p className="author-text">
          Copyright ©2023 All rights reserved | This website is developed by
          Will
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
