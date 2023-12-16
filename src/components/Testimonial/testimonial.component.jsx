import React from "react";

import "./testimonial.styles.scss";
import Testimonies from "./testimonies.component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Testimonial = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const testVariants = {
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
      variants={testVariants}
      transition={transition}
      className="testimonial"
    >
      <div className="testimonial-text">
        <p className="testimonial-title">Testimonial</p>
        <span className="test-watermark">Testimonial</span>
      </div>
      <Testimonies />
    </motion.div>
  );
};

export default Testimonial;
