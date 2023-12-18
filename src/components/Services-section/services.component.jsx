import React from "react";

import "./services.styles.scss";
import Navigation from "../Navigation/navigation.component";
import { motion } from "framer-motion";

const Services = () => {
  const mobileBreakpoint = 600;

  const isPhoneScreen = window.innerWidth <= mobileBreakpoint;

  if (isPhoneScreen) {
    return (
      <>
        <Navigation />
        <div className="services">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="services-header-cont"
          >
            <p className="services-header">Services</p>
          </motion.div>
        </div>
      </>
    );
  }
  return (
    <div className="services">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="services-header-cont"
      >
        <p className="services-header">Services</p>
      </motion.div>
    </div>
  );
};

export default Services;
