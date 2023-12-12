import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import "./navigation.styles.scss";

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="navigation">
      <div className="logo-cont">
        <span className="logo">Bistro</span>
      </div>
      <div className="navlinks">
        <span className="navlink">Home</span>
        <span className="navlink">Recipes</span>
        <span
          className="navlink with-dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Services
          <span className="mini-arrow">
            <IoMdArrowDropdown />
          </span>
          {showDropdown && (
            <div className="dropdown">
              <span className="dropitem">Catering</span>
              <span className="dropitem">Birthday Party</span>
              <span className="dropitem">Wedding Party</span>
            </div>
          )}
        </span>
        <span className="navlink">About</span>
        <span className="navlink">News</span>
      </div>
      <div className="contact-cont">
        <button className="contact-btn">Contact us</button>
      </div>
    </div>
  );
};

export default Navigation;
