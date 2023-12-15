import React from "react";

import "./chefs.styles.scss";
import ChefsGrid from "./chefs-grid.component";

const Chefs = () => {
  return (
    <div className="chefs-cont">
      <div className="chefs-text-cont">
        <p className="chefs-title">Chefs</p>
        <span className="chefs-watermark">Our chefs</span>
      </div>
      <ChefsGrid />
    </div>
  );
};

export default Chefs;
