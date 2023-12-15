import React from "react";

import "./services.styles.scss";
import Navigation from "../Navigation/navigation.component";

const Services = () => {
  return (
    <div className="services">
      <Navigation />
      <div className="services-header-cont">
        <p className="services-header">Services</p>
      </div>
    </div>
  );
};

export default Services;
