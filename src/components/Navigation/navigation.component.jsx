import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

import "./navigation.styles.scss";

const Navigation = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="navigation">
      <div className="logo-cont">
        <Link to="/" onClick={() => window.scrollTo(0, 0)} className="logo">
          Bistro
        </Link>
      </div>
      <div className="navlinks">
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/home"
          className="navlink"
        >
          Home
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/recipes"
          className="navlink"
        >
          Recipes
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          to="/services"
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
              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="dropitem"
              >
                Catering
              </Link>
              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="dropitem"
              >
                Birthday Party
              </Link>
              <Link
                to="/services"
                onClick={() => window.scrollTo(0, 0)}
                className="dropitem"
              >
                Wedding Party
              </Link>
            </div>
          )}
        </Link>
        <Link
          to="/about"
          onClick={() => window.scrollTo(0, 0)}
          className="navlink"
        >
          About
        </Link>
        <Link
          to="/blog"
          onClick={() => window.scrollTo(0, 0)}
          className="navlink"
        >
          News
        </Link>
      </div>
      <Link
        to="/contact"
        onClick={() => window.scrollTo(0, 0)}
        className="contact-cont"
      >
        <button className="contact-btn">Contact us</button>
      </Link>
    </div>
  );
};

export default Navigation;
