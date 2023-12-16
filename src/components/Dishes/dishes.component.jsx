import React from "react";

import "./dishes.styles.scss";
import DishCarousel from "./dish-carousel.component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Dishes = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const dishVariants = {
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
      variants={dishVariants}
      transition={transition}
      className="dishes-cont"
    >
      <div className="dish-text-cont">
        <p className="dish-title">Special Dishes</p>
        <span className="dish-watermark">Dishes</span>
      </div>
      <DishCarousel />
    </motion.div>
  );
};

export default Dishes;
