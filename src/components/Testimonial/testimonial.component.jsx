import React from "react";

import "./testimonial.styles.scss";
import Testimonies from "./testimonies.component";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-text">
        <p className="testimonial-title">Testimonial</p>
        <span className="test-watermark">Testimonial</span>
      </div>
      <Testimonies />
    </div>
  );
};

export default Testimonial;
