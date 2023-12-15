import React from "react";

import "./contact.styles.scss";
import Navigation from "../Navigation/navigation.component";
import ContactForm from "./contact-form.component";

const Contact = () => {
  return (
    <>
      <div className="contact-head">
        <Navigation />
        <div className="contact-header-cont">
          <p className="contact-header">Contact us</p>
        </div>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
