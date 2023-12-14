import React from "react";

import "./newsletter.styles.scss";

const Newsletter = () => {
  return (
    <div className="newsletter">
      <p className="news-title">Subscribe to Our Newsletter</p>
      <p className="news-text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex
        temporibus magni ipsam inventore dolorum sunt, amet vel.
      </p>
      <div className="form-cont">
        <div>
          <input
            type="text"
            placeholder="Enter Email Address"
            className="news-input"
          />
        </div>
        <div>
          <button className="sub-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
