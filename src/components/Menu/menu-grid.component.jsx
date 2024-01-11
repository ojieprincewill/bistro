import React from "react";

import "./menu-grid.styles.scss";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const menuItems = [
  {
    image: "	https://preview.colorlib.com/theme/eatery/img/dishes_2.jpg",
    title: "Grilled Caesar salad, shaved reggiano",
    price: "$15.10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
  },

  {
    image:
      "https://cdn.pixabay.com/photo/2018/07/26/22/23/dough-3564744_1280.jpg",
    title: "Seared ahi tuna fillet*, tom yi sauce",
    price: "$12.99",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
  },
  {
    image: "https://preview.colorlib.com/theme/eatery/img/dishes_4.jpg",
    title: "Bacon wrapped wild gulf prawns",
    price: "$10.20",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
  },
  {
    image:
      "https://cdn.pixabay.com/photo/2014/01/24/04/36/roasted-250875_1280.jpg",
    title: "Spicy Calamari and beans",
    price: "$13.50",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
  },
];

const MenuGrid = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const menuGridVariants = {
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
      variants={menuGridVariants}
      transition={transition}
      className="menu-grid"
    >
      <div className="menu-flex">
        {menuItems.slice(0, 2).map((item) => (
          <div className="item-flex1">
            <div className="card-text">
              <span className="menuitem-title">{item.title}</span>
              <span className="menuitem-description">{item.description}</span>
              <span className="menuitem-price">{item.price}</span>
            </div>
            <div className="card-image-cont">
              <img src={item.image} alt={item.title} className="card-image" />
            </div>
          </div>
        ))}
      </div>
      <div className="menu-flex">
        {menuItems.slice(2, 4).map((item) => (
          <div className="item-flex2">
            <div className="card-text">
              <span className="menuitem-title">{item.title}</span>
              <span className="menuitem-description">{item.description}</span>
              <span className="menuitem-price">{item.price}</span>
            </div>
            <div className="card-image-cont">
              <img src={item.image} alt={item.title} className="card-image" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuGrid;
