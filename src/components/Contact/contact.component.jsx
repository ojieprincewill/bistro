import React from "react";

import "./contact.styles.scss";
import Navigation from "../Navigation/navigation.component";
import ContactForm from "./contact-form.component";
import { motion } from "framer-motion";

const Contact = () => {
  const mobileBreakpoint = 600;

  const isPhoneScreen = window.innerWidth <= mobileBreakpoint;

  if (isPhoneScreen) {
    return (
      <>
        <Navigation />
        <div className="contact-head">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="contact-header-cont"
          >
            <p className="contact-header">Contact us</p>
          </motion.div>
        </div>
        <ContactForm />
      </>
    );
  }
  return (
    <>
      <div className="contact-head">
        <Navigation />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="contact-header-cont"
        >
          <p className="contact-header">Contact us</p>
        </motion.div>
      </div>
      <ContactForm />
    </>
  );
};

export default Contact;
