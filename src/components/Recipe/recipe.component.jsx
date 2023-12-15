import React from "react";

import "./recipe.styles.scss";
import Navigation from "../Navigation/navigation.component";

const Recipe = () => {
  return (
    <div className="recipe">
      <Navigation />
      <div className="recipe-header-cont">
        <p className="recipe-header">Our recipes</p>
      </div>
    </div>
  );
};

export default Recipe;
