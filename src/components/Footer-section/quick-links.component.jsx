import React from "react";

import { Link } from "react-router-dom";

import "./quick-links.styles.scss";

const QuickLinks = () => {
  return (
    <div className="container">
      <p className="quick-header">Quick Links</p>
      <div className="quick-links">
        <Link
          to="/about"
          onClick={() => window.scrollTo(0, 0)}
          className="quick-link"
        >
          About
        </Link>
        <span className="quick-link">Terms of Use</span>
        <span className="quick-link">Disclaimers</span>
        <Link
          to="/contact"
          onClick={() => window.scrollTo(0, 0)}
          className="quick-link"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
