import React from "react";

import "./dish-carousel.styles.scss";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const dishes = [
  {
    image: "https://preview.colorlib.com/theme/eatery/img/dishes_4.jpg",
    title: "chicken parmigiana",
    price: "$10.20",
  },
  {
    image: "	https://preview.colorlib.com/theme/eatery/img/dishes_2.jpg",
    title: "organic tomato salad",
    price: "$15.10",
  },
  {
    image: "https://preview.colorlib.com/theme/eatery/img/dishes_1.jpg",
    title: "baked broccoli",
    price: "$12.99",
  },
  {
    image: "https://preview.colorlib.com/theme/eatery/img/dishes_3.jpg",
    title: "pasta primavera",
    price: "$13.50",
  },
];

const DishCarousel = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const dishCarouselVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const transition = {
    duration: 0.7,
    delay: inView ? 0.3 : 0,
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={dishCarouselVariants}
        transition={transition}
        className="carousel-container"
      >
        <div className="carousel-wrapper">
          {dishes.map((dish, index) => (
            <div key={index} className="carousel-item">
              <img src={dish.image} alt={dish.title} className="dish-image" />
              <div className="info-overlay">
                <span className="dish-price">{dish.price}</span>
                <span className="dish-title">{dish.title}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default DishCarousel;
