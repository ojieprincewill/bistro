import React from "react";

import "./food-items.styles.scss";

import cheers from "../../assets/flaticons/cheers.png";
import coffeeCup from "../../assets/flaticons/coffee-cup.png";
import fish from "../../assets/flaticons/fish.png";
import salad from "../../assets/flaticons/salad.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const FoodItems = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const itemVariants = {
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
      variants={itemVariants}
      transition={transition}
      className="food-items-cont"
    >
      <div className="food-items">
        <img src={cheers} alt="flat-icon-cheers" className="food-item" />
        <p className=" food-title">Refreshing Drinks</p>
        <p className="food-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="food-items">
        <img src={coffeeCup} alt="flat-icon-coffee" className="food-item" />
        <p className=" food-title">Cup Coffees</p>
        <p className="food-text">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam.
        </p>
      </div>
      <div className="food-items">
        <img src={fish} alt="flat-icon-fish" className="food-item" />
        <p className=" food-title">Sea Foods</p>
        <p className="food-text">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti.
        </p>
      </div>
      <div className="food-items">
        <img src={salad} alt="flat-icon-salad" className="food-item" />
        <p className=" food-title">Fresh Salad</p>
        <p className="food-text">
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae.
        </p>
      </div>
    </motion.div>
  );
};

export default FoodItems;
