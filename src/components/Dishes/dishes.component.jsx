import React from "react";

import "./dishes.styles.scss";
import DishCarousel from "./dish-carousel.component";

const Dishes = () => {
  return (
    <div className="dishes-cont">
      <div className="dish-text-cont">
        <p className="dish-title">Special Dishes</p>
        <span className="dish-watermark">Dishes</span>
      </div>
      <DishCarousel />
    </div>
  );
};

export default Dishes;
