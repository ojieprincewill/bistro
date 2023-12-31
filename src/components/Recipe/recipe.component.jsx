import React from "react";

import "./recipe.styles.scss";
import Navigation from "../Navigation/navigation.component";
import { motion } from "framer-motion";

const Recipe = () => {
  const mobileBreakpoint = 600;

  const isPhoneScreen = window.innerWidth <= mobileBreakpoint;

  if (isPhoneScreen) {
    return (
      <>
        <Navigation />
        <div className="recipe">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="recipe-header-cont"
          >
            <p className="recipe-header">Our recipes</p>
          </motion.div>
        </div>
      </>
    );
  }
  return (
    <div className="recipe">
      <Navigation />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="recipe-header-cont"
      >
        <p className="recipe-header">Our recipes</p>
      </motion.div>
    </div>
  );
};

export default Recipe;
