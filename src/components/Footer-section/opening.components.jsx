import React from "react";

import "./opening.styles.scss";

const Opening = () => {
  return (
    <div className="container">
      <p className="opening-header">Opening Hours:</p>
      <p className="opening-text">Sunday-Friday</p>
      <p className="opening-text">10AM - 10PM</p>
      <div className="contact">
        <p className="contact-header">Contact Info</p>
        <p className="contact-text">Address:</p>
        <p className="contact-text2">
          14 Street Name, City Name Here, United States.
        </p>
        <p className="contact-text">Telephone:</p>
        <p className="contact-text2">+1 323 4142 290</p>
        <p className="contact-text">Email:</p>
        <p className="contact-text2">info@yourdomain.com</p>
      </div>
    </div>
  );
};

export default Opening;
