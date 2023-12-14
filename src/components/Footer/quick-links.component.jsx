import React from "react";

import "./quick-links.styles.scss";

const QuickLinks = () => {
  return (
    <div className="container">
      <p className="quick-header">Quick Links</p>
      <div className="quick-links">
        <span className="quick-link">About</span>
        <span className="quick-link">Terms of Use</span>
        <span className="quick-link">Disclaimers</span>
        <span className="quick-link">Contact</span>
      </div>
    </div>
  );
};

export default QuickLinks;
