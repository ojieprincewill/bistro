import React from "react";

import "./contact-form.styles.scss";

import { MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const contactVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const contactTransition = {
    duration: 0.7,
    delay: inView ? 0.4 : 0,
  };

  const contactFormTransition = {
    duration: 0.7,
    delay: inView ? 0.3 : 0,
  };
  return (
    <div className="contact-form">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contactVariants}
        transition={contactTransition}
        className="contact-form-text-cont"
      >
        <p className="contact-form-title">Get In Touch</p>
        <span className="contact-form-watermark">Contact Form</span>
      </motion.div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={contactVariants}
        transition={contactFormTransition}
        className="contact-form-grid"
      >
        <div className="form">
          <div className="form-flex">
            <div>
              <p className="label">Name</p>
              <input type="text" className="form-field" required />
            </div>
            <div>
              <p className="label">Phone</p>
              <input type="text" className="form-field" required />
            </div>
          </div>
          <div>
            <p className="label">Email</p>
            <input type="text" className="form-field" required />
          </div>
          <div>
            <p className="label">Write Message</p>
            <textarea className="textarea" />
          </div>
          <div>
            <button className="send-btn">Send message</button>
          </div>
        </div>
        <div className="contact-info-cont">
          <p className="info-header">Contact Details</p>
          <div className="info-flex">
            <span className="contact-icon">
              <MdLocationPin />
            </span>
            <p className="info-text">
              14 Street Name, City Name Here, United States.
            </p>
          </div>
          <div className="info-flex">
            <span className="contact-icon">
              <FaPhone />
            </span>
            <p className="info-text">+1 323 4142 290</p>
          </div>
          <div className="info-flex">
            <span className="contact-icon">
              <IoMdMail />
            </span>
            <p className="info-text">info@yourdomain.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
