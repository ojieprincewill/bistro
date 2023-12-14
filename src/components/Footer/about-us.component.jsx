import React from "react";

import "./about-us.styles.scss";

import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const AboutUs = () => {
  return (
    <div className="container">
      <p className="aboutus-header">About Us</p>
      <p className="aboutus-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et
        dolor blanditiis consequuntur ex voluptates perspiciatis omnis unde
        minima expedita.
      </p>
      <div className="socials-cont">
        <span className="social-icon">
          <BsTwitterX />
        </span>
        <span className="social-icon">
          <FaFacebookF />
        </span>
        <span className="social-icon">
          <FaLinkedinIn />
        </span>
        <span className="social-icon">
          <BsInstagram />
        </span>
      </div>
    </div>
  );
};

export default AboutUs;
