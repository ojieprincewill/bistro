import React from "react";

import "./menu-grid.styles.scss";

const menuItems = [
  {
    image: "	https://preview.colorlib.com/theme/eatery/img/dishes_2.jpg",
    title: "Grilled Caesar salad, shaved reggiano",
    price: "$15.10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
  },

  {
    image: "https://preview.colorlib.com/theme/eatery/img/dishes_1.jpg",
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
    image: "https://preview.colorlib.com/theme/eatery/img/dishes_3.jpg",
    title: "Spicy Calamari and beans",
    price: "$13.50",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto illo delectus...",
  },
];

const MenuGrid = () => {
  return (
    <div className="menu-grid">
      <div className="menu-flex">
        {menuItems.slice(0, 2).map((item) => (
          <div className="item-flex">
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
          <div className="item-flex">
            <div className="card-image-cont">
              <img src={item.image} alt={item.title} className="card-image" />
            </div>
            <div className="card-text">
              <span className="menuitem-title">{item.title}</span>
              <span className="menuitem-description">{item.description}</span>
              <span className="menuitem-price">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuGrid;
