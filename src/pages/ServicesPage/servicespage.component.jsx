import React from "react";
import Services from "../../components/Services-section/services.component";
import FoodItems from "../../components/Items/food-items.component";
import FooterSection from "../../components/Footer-section/footer-section.component";
import Newsletter from "../../components/Newsletter/newsletter.component";

const ServicesPage = () => {
  return (
    <>
      <Services />
      <FoodItems />
      <FoodItems />
      <Newsletter />
      <FooterSection />
    </>
  );
};

export default ServicesPage;
