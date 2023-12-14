import React from "react";

import "./menu.styles.scss";
import MenuGrid from "./menu-grid.component";

const Menu = () => {
  return (
    <div className="menu-cont">
      <div className="menu-text-cont">
        <p className="menu-title">Our Menu</p>
        <span className="menu-watermark">Menu</span>
      </div>
      <MenuGrid />
    </div>
  );
};

export default Menu;
