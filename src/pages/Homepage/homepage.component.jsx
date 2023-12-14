import React from "react";
import Header from "../../components/Header/header.component";
import FoodItems from "../../components/Items/food-items.component";
import Dishes from "../../components/Dishes/dishes.component";
import Menu from "../../components/Menu/menu.component";
import Testimonial from "../../components/Testimonial/testimonial.component";
import Blog from "../../components/Blog/blog.component";
import Newsletter from "../../components/Newsletter/newsletter.component";
import FooterSection from "../../components/Footer/footer-section.component";

const HomePage = () => {
  return (
    <>
      <Header />
      <FoodItems />
      <Dishes />
      <Menu />
      <Testimonial />
      <Blog />
      <Newsletter />
      <FooterSection />
    </>
  );
};

export default HomePage;
