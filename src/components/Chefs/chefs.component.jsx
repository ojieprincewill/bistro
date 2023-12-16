import React from "react";

import "./chefs.styles.scss";
import ChefsGrid from "./chefs-grid.component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Chefs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const chefsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.7,
    delay: inView ? 0.4 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={chefsVariants}
      transition={transition}
      className="chefs-cont"
    >
      <div className="chefs-text-cont">
        <p className="chefs-title">Chefs</p>
        <span className="chefs-watermark">Our chefs</span>
      </div>
      <ChefsGrid />
    </motion.div>
  );
};

export default Chefs;
