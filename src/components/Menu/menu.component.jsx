import React from "react";

import "./menu.styles.scss";
import MenuGrid from "./menu-grid.component";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Menu = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const menuVariants = {
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
      variants={menuVariants}
      transition={transition}
      className="menu-cont"
    >
      <div className="menu-text-cont">
        <p className="menu-title">Our Menu</p>
        <span className="menu-watermark">Menu</span>
      </div>
      <MenuGrid />
    </motion.div>
  );
};

export default Menu;
