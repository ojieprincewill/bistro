import React from "react";

import "./chefs-grid.styles.scss";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const chefs = [
  {
    name: "Megumi West",
    image: "https://preview.colorlib.com/theme/eatery/img/person_3.jpg",
    occupation: "Owner, Bistro",
  },
  {
    name: "Mike Grant ",
    image: "https://preview.colorlib.com/theme/eatery/img/person_1.jpg",
    occupation: "Head Chef, Bistro",
  },
  {
    name: "Jacob Danielson",
    image: "https://preview.colorlib.com/theme/eatery/img/person_2.jpg",
    occupation: "Sous Chef, Bistro",
  },
];

const ChefsGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const chefsGridVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.7,
    delay: inView ? 0.3 : 0,
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={chefsGridVariants}
      transition={transition}
      className="chefs-grid-container"
    >
      <div className="chefs-wrapper">
        {chefs.map((chef, index) => (
          <div key={index} className="chef-item">
            <div className="chef-image-cont">
              <img src={chef.image} alt={chef.name} className="chef-image" />
            </div>
            <div className="chef-card">
              <p className="chef-name">{chef.name}</p>
              <p className="chef-occupation">{chef.occupation}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default ChefsGrid;
